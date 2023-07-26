import { EVENTTYPES } from "../interface/enum"
import { addReplaceHandler } from "./handle"
import { handleEvents } from "./handleEvents"

export function setupReplace(){

    addReplaceHandler({
        callback:(error:any)=>{
            handleEvents.handleError(error)
        },
        type: EVENTTYPES.ERROR
    })

    addReplaceHandler({
        callback:(error:any)=>{
            handleEvents.handleHttpError(error , EVENTTYPES.XHR)
        },
        type: EVENTTYPES.ERROR
    })
}