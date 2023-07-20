import {Window} from '../interface/global.interface'

const _global = getGlobal(); // 获取全局变量
// const _support = getGlobalSupport()
// _support.replaceFlag = _support.replaceFlag || {};
// const replaceFlag = _support.replaceFlag;


function getGlobal():Window{
    return window as any as Window
}

// function getGlobalSupport():any{
//     _global.__webSee__ = _global.__webSee__ || ({} as WebSee);
//     return _global.__webSee__;
// }