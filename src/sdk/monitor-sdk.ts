import { Options } from "../interface/option.interface";

export class MonitorSdk{

    private initialized:boolean = false

    constructor(options:Options){
        this.init(options)
    }


    // 初始化sdk
    init(options:any): void {
        if(options.apiKey && !options.userId){
            return console.error(`缺少配置项:${!options.apiKey} ? 'userId' : 'apiKey' `)
        }
        
        this.initialized = true;
    }


}