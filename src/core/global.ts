import {Window} from '../interface/base.interface'

const _global = getGlobal(); // 获取全局变量

function getGlobal():Window{
    return window as any as Window
}


export {
    _global
}