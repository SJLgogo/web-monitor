
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

  
  /**
   * 
   * @param target: 字段
   * @param targetName  字段名称
   * @param expectType  期望的类型
   * @returns 
   */
  export function validateOption(target: any, targetName: string, expectType: string): any {
    if (!target) return false;
    if (typeofAny(target) === expectType) return true;
    console.error(`web-see: ${targetName}期望传入${expectType}类型，目前是${typeofAny(target)}类型`);
  }

  export function typeofAny(target: any): string {
    return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
  }
