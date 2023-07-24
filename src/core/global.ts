import {Window} from '../interface/base.interface'
declare const window: Window;

const _global = getGlobal(); // 获取全局变量

function getGlobal():Window{
    return window as any as Window
}


export {
    _global
}