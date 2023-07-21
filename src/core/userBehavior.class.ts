import { UserBehaviorData } from "../interface/base.interface";

class UserBehavior{


    maxBreadcrumbs:number=20
    stack: UserBehaviorData[];


    constructor(){
        this.stack=[]
    }

    /**
     * 添加用户行为栈
     */
    push(behavior:UserBehaviorData):void{
        this.immediatePush(behavior);
    }

    immediatePush(data:UserBehaviorData):void{
        data.time || (data.time = Date.now());
        if (this.stack.length >= this.maxBreadcrumbs) {
            this.shift();
          }
          this.stack.push(data);
          this.stack.sort((a, b) => a.time - b.time);
    }

    shift(): boolean {
        return this.stack.shift() !== undefined;
    }


    getStack():UserBehaviorData[]{
        return this.stack
    }
  
}

const userBehavior = new UserBehavior()
export { userBehavior };