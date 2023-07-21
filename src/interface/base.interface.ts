import { EVENTTYPES, STATUS_CODE } from "./enum";

export interface Options{
    dsn:string;     // 上传的地址
    apikey: string; // 项目id
    userId?: string; // 用户id
}

export interface Window {
    __webSee__: {
      [key: string]: any;
    };
  }

export interface UserBehaviorData{
    time:number;  // 发生的时间
    status:STATUS_CODE;  // 状态
    type:EVENTTYPES;    // 事件类型
    data:any;
}

export interface EventHandler{
    callback:Function;
    type:EVENTTYPES
}
  



