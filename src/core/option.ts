import { InitOptions } from "../interface/base.interface";
import { transportData } from "./transportData";

export function handleOptions(paramOptions: InitOptions): void {

      // transportData 配置上报的信息
      transportData.bindOptions(paramOptions);
}