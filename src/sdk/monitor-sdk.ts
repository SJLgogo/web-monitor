import { addHandeler } from "../core/handle";
import { handleEvents } from "../core/handleEvents";
import { Options } from "../interface/base.interface";
import { EVENTTYPES } from "../interface/enum";

export class MonitorSdk{

    constructor(options:Options){
        this.init(options)
    }


    // 初始化sdk
    private init(options:any): void {
        if(!options.apiKey || !options.dsn){
            return console.error(`缺少配置项:${!options.apiKey} ? 'dsn' : 'apiKey' `)
        }
        this.registerEvent()
    }


    registerEvent():void{
        addHandeler({
            callback:(error:any)=>{
                handleEvents.handleError(error)
            },
            type: EVENTTYPES.ERROR
        })
    }




}