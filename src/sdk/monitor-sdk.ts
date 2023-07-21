import { addHandeler } from "../core/handle";
import { Options } from "../interface/base.interface";
import { EVENTTYPES } from "../interface/enum";

export class MonitorSdk{

    constructor(options:Options){
        this.init(options)
    }


    // 初始化sdk
    init(options:any): void {
        if(!options.apiKey || !options.dsn){
            return console.error(`缺少配置项:${!options.apiKey} ? 'dsn' : 'apiKey' `)
        }
        this.registerEvent()
    }


    registerEvent():void{
        addHandeler({
            callback:(error:any)=>{

            },
            type: EVENTTYPES.ERROR
        })
    }




}