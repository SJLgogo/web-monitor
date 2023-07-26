import { EVENTTYPES } from "../interface/enum"
import { addReplaceHandler } from "./handle"
import { handleEvents } from "./handleEvents"

export function setupReplace(){

    // 捕获错误
    addReplaceHandler({
        callback:(error:any)=>{
            handleEvents.handleError(error)
        },
        type: EVENTTYPES.ERROR
    })
}