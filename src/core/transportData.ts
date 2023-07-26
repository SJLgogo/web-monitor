import { InitOptions } from "../interface/base.interface";
import { validateOption } from "../utils/helper";
import { Queue } from "../utils/queue";
// const fetch = require('node-fetch');

class TransportData{

    queue=new Queue()
    dsn:string = '';
    
    constructor(){
    }

    send(data:any):void{
        this.xhrPost(data , this.dsn)
    }

    async xhrPost(data: any, url: string): Promise<void> {
        const requestFun = () => {
          // fetch(`${url}`, {
          //   method: 'POST',
          //   body: JSON.stringify(data),
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          // });
        };
        this.queue.addFn(requestFun);
      }


      bindOptions(options:InitOptions):void{
        const { dsn, apikey, userId } = options;
        validateOption(dsn,'dsn','string') && (this.dsn = dsn) ;

      }
}

const transportData = new TransportData()

export { transportData }
