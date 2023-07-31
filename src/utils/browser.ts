declare const window: any;

const errorMap = new Map();

// 对每一个错误详情，生成唯一的编码
export function getErrorUid(input: string): string {
    return window.btoa(encodeURIComponent(input));
}


export function hashMapExist(hash: string): boolean {
    const exist = errorMap.has(hash);
    if (!exist) {
      errorMap.set(hash, true);
    }
    return exist;
  }
  
