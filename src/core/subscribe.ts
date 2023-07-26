import { EventHandler } from "../interface/base.interface";
import { EVENTTYPES } from "../interface/enum";
import { nativeTryCatch } from "../utils/helper";

const handlers : { [key in EVENTTYPES]? : Function[] } = {}


/** 存储不同类型的callback { error: [ funtion ] } */
export function subscribeEvent(handler: EventHandler):boolean{
    if(!handler) return false
    handlers[handler.type] = handlers[handler.type] || [];
    handlers[handler.type]?.push(handler.callback);
    return true
}


/** 根据不同类型，执行callback */
export function notify(type:EVENTTYPES , data:any):void{
    handlers[type]?.forEach((callback:Function)=>{
        nativeTryCatch(
                ()=>{
                    callback(data);
                },
                ()=>{
                console.error(`${type}回调函数报错`);
                },
            )
    })

}