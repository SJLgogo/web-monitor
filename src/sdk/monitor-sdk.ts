import { handleEvents } from "../core/handleEvents";
import { handleOptions } from "../core/option";
import { setupReplace } from "../core/setupReplace";
import { ErrorTarget, InitOptions } from "../interface/base.interface";
import { EVENTTYPES } from "../interface/enum";

export class MonitorSdk{

    constructor(options:InitOptions){
        this.init(options)
    }

    // 初始化sdk
    private init(options:any): void {
        if(!options.apikey || !options.dsn){
            return console.error(`缺少必填配置项:${!options.apiKey} ? 'dsn' : 'apiKey' `)
        }
        // 初始化配置
        handleOptions(options);
        setupReplace()
    }

}

// 处理angular报错
export function handleAngularError(err:ErrorTarget):void{
    handleEvents.handleError(err)
}       


// 处理angular请求
export function handleHttpError(err:ErrorTarget):void{
    handleEvents.handleHttpError(err , EVENTTYPES.XHR)
}     