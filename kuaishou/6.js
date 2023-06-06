// 内存空间有限
// LRU最近最少使用原则 least recently used 内存回收
// 2 capacity 容量
// 存储结构 Map set get方法
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity//容量
        this.cache = cache//存储结构
    }
    get(key) {
        if (this.cache.has(key)) {
            const value = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, value)//更新了进入map时间
            return value
        }
    }
    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        }
        this.cache.set(key, value)
        if (this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next().value
            this.cache.delete(firstKey)
        }
    }
}
const cache = new LRUCache(2)
cache.set('key1', 'value1')//Map
cache.set('key2', 'value2')
console.log(cache.get('key1'));// 时间戳
cache.set('key3', 'value3')//1.key3存 key2 删除链表的一个节点
console.log(cache.get('key2'));// -1
console.log(cache.get('key1'));//key1比key3最近使用频繁
cache.set('key4', 'value4')
console.log(cache.get('key3'));//-1
console.log(cache.get('key1'));//value1
console.log(cache.get('key4'));//value4