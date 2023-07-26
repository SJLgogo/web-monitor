import * as ErrorStackParser  from 'error-stack-parser'; // 解析error堆栈
import { getTimestamp } from '../utils/helper';
import { EVENTTYPES } from '../interface/enum';
import { _global } from './global';
import { transportData } from './transportData';
import { ErrorTarget } from '../interface/base.interface';
import { httpTransform, resourceTransform } from './transformData';

export const handleEvents = {

    handleError:(err:ErrorTarget)=>{
      const target:any = err.target;

      if(err?.name == "HttpErrorResponse"){
        return 
        return handleEvents.handleHttpError(err , EVENTTYPES.XHR)
      }

      // 静态资源加载错误
      if(target?.localName){
        const data = resourceTransform(target);
        return transportData.send({
          ...data,
          type: EVENTTYPES.RESOURCE,
        });
      }

      if(!target){
        const stackFrame = ErrorStackParser.parse(err as Error)[0];
        const { fileName , columnNumber, lineNumber } = stackFrame;
        const errorData = {
          type:EVENTTYPES.ERROR,
          time: getTimestamp(),
          message: err.message,
          url:fileName,
          line: lineNumber,
          column: columnNumber,
        };
        return transportData.send(errorData)
      }
    },

    // 接口请求错误
    handleHttpError:(data:any , type:EVENTTYPES)=>{
      const result = httpTransform(data);
    }
}

