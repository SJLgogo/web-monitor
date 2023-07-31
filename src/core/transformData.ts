import { getTimestamp } from "../utils/helper";

export function httpTransform(data:any):any{
    console.log('转换接口错误数据 : ' , data);
    const { url ,  message , status } = data;
    return {
      url,
      status,
      message,
      time:getTimestamp()
    }
}


export function resourceTransform(target:any): any {
  return {
    time: getTimestamp(),
    message:(target.src || target.href) + ': 资源加载失败',
    name: target.localName as string,
  }
}