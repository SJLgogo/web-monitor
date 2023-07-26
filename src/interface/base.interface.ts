import { EVENTTYPES, STATUS_CODE } from "./enum";

export interface InitOptions{
    dsn:string;     // 上传的地址
    apikey: string; // 项目id
    userId?: string; // 用户id
}

export interface Window {
  chrome: {
    app: {
      [key: string]: any;
    };
  };
  location:any;
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
  


