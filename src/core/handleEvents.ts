import * as ErrorStackParser  from 'error-stack-parser'; // 解析error堆栈
import { getTimestamp } from '../utils/helper';
import { EVENTTYPES } from '../interface/enum';
import { _global } from './global';

export const handleEvents = {

    /** 处理前端错误 */
    handleError:(err:any)=>{
       console.error(err);
       const stackFrame = ErrorStackParser.parse(err)[0];
       console.log(stackFrame);
       const { columnNumber, lineNumber } = stackFrame;
       const errorData = {
         type:EVENTTYPES.ERROR,
         time: getTimestamp(),
         message: err.message,
         url:_global.location.href,
         line: lineNumber,
         column: columnNumber,
       };
       console.log(errorData);

    }

}

