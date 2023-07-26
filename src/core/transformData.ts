import { getTimestamp } from "../utils/helper";

export function httpTransform(data:any):any{

    return data
}


export function resourceTransform(target:any): any {
  return {
    time: getTimestamp(),
    message:(target.src || target.href) + ': 资源加载失败',
    name: target.localName as string,
  }
}