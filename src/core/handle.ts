import { EventHandler } from "../interface/base.interface";
import { EVENTTYPES } from "../interface/enum";
import { nativeTryCatch, on } from "../utils/helper";
import { _global } from "./global";

const handlers : { [key in EVENTTYPES]? : Function[] } = {}

export function addHandeler(handler: EventHandler):void{
    saveHandlerCallBack(handler)
    replace(handler.type)
}


/** 存储callback */
function saveHandlerCallBack(handler: EventHandler):boolean{
    if(!handler) return false
    handlers[handler.type] = handlers[handler.type] || [];
    handlers[handler.type]?.push(handler.callback);
    return true
}

/** 根据不同类型，执行callback */
function notify(type:EVENTTYPES , data:any):void{
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

function replace(type:EVENTTYPES){
    switch (type) {
        case EVENTTYPES.ERROR:
            listenError()
            break;
        default:
            break;
    }
}   


function listenError(){
    on(
        _global , 'error', (e:any)=>{
          notify(EVENTTYPES.ERROR, e);
        } ,
        true
    )
}