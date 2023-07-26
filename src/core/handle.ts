import { EventHandler } from "../interface/base.interface";
import { EVENTTYPES } from "../interface/enum";
import { nativeTryCatch, on } from "../utils/helper";
import { _global } from "./global";
import { notify, subscribeEvent } from "./subscribe";


export function addReplaceHandler(handler: EventHandler):void{
    subscribeEvent(handler)
    replace(handler.type)
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