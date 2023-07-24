
/**
 * 事件监听
 * @param target 
 * @param eventName 
 * @param handler 
 * @param opitons 
 */
export function on(target: any, eventName: string, handler: Function, opitons = false) {
    target.addEventListener(eventName, handler, opitons);
}

/**
 * 原生try函数
 */
export function nativeTryCatch(fn: any, errorFn?: any): void {
    try {
      fn();
    } catch (err) {
      if (errorFn) {
        errorFn(err);
      }
    }
  }
  

  /** 获取当前时间戳 */
  export function getTimestamp():number{
    return Date.now()
  }