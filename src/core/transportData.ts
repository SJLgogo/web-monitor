import { InitOptions } from "../interface/base.interface";
import { getLocationHref, validateOption } from "../utils/helper";
import { Queue } from "../utils/queue";
declare const fetch:any;

class TransportData{

    queue=new Queue();
    dsn:string = '';
    apikey:string='';  
    userId:string='';
    
    constructor(){
    }

    async send(data:any):Promise<void>{
      if(!this.dsn){
        console.error('dsn为空，没有传入监控错误上报的dsn地址，请在init中传入');
        return;
      }
      const result = (await this.beforePost(data)) ;
      this.xhrPost(result , this.dsn)
    }

    async xhrPost(data: any, url: string): Promise<void> {
        const requestFun = () => {
          fetch(`${url}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((res:any)=>{
            console.log('success:' , res);
          }).catch((err:any)=>{
            console.error(err)
          });
        };
        this.queue.addFn(requestFun);
      }


      /** 绑定参数 */
      bindOptions(options:InitOptions):void{
        const { dsn, apikey, userId } = options;
        validateOption(dsn,'dsn','string') && (this.dsn = dsn) ;
        validateOption(apikey,'apikey','string') && (this.apikey = apikey) ;
        validateOption(apikey,'apikey','string') && (this.apikey = apikey) ;
      }

      /** 请求前处理数据 */
      beforePost(data:any):void{
          let transportData = this.getTransportData(data);
          return transportData
      }

      getTransportData(data:any):any{
        const info = {
          ...data,
          ...this.getUserInfo(),
          pageUrl: getLocationHref(),
        };
        console.log(info);
        return info
      }

      getUserInfo():any{
        return{
          userId:this.userId,
          apikey:this.apikey
        }
      }
}

const transportData = new TransportData()

export { transportData }
