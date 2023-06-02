function getTypeof(value) {
    var type = typeof value
    // 简单数据类型 + function
    if (type != 'object') {
        console.log('a');
        return type
    }
    // null + 复杂数据类型 将子类型输出来 array,null,Object,set,map
    return Object.prototype.toString.call(value)
}
// console.log(getTypeof({}));

function isSet(data) {
    return data instanceof Set || (typeof data === 'object' &&
        data != null && typeof data.size === 'number')
}
function isMap(data) {
    return data instanceof Map || (typeof data === 'object' &&
        data != null && typeof data.size === 'number')
}
const s = new Set([1,2,2])
// console.log(getTypeof(s));
// console.log(isMap(s));

let map = new Map([
    ['name', 'jack'],
    [100, 18],
])
// console.log(typeof(map));
map.set('name2','a')
map.delete('name')
// console.log(map)
// console.log(map.size)
// console.log(map.get('name2'))
// console.log(map.has('name2'))

const set = new Set();
set.add(1).add(2).add(3);
// console.log(set);