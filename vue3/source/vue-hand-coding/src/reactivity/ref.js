// 简单数据类型响应式怎么做
import { track, trigger } from './effect'
import { reactive } from './reactive'
import { isObject } from '../shared'
export function ref(val) {
    if (isRef(val)) {
        // console.log('ref再ref', val);
        return val
    }
    // 简单数据类型ref
    return new RefImpl(val)
}
export function isRef(val) {
    // 返回boolean 
    return !!(val && val.__isRef)
}
// es6 class get set方法
class RefImpl {
    constructor(val) {
        // 响应‘对象’使用ref做的
        this.__isRef = true
        this._val = convert(val)
    }
    get value() {
        track(this, 'get', 'value')
        return this._val
    }
    set value(val) {
        if (val !== this._val) {
            this._val = convert(val)
            trigger(this, 'set', 'value')
        }
    }
}
function convert(val) {
    return isObject(val) ? reactive(val) : val
}