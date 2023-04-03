// vue3 = composition api + hooks编程 
// 复用 = 组件复用 / utils
// hooks函数复用 = 响应式状态 + utils复用
import { ref, onMounted, onUnmounted, Ref } from 'vue'
// 以use开头的函数是hooks函数 useStore useRouter
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
    const isClickOutside = ref(false)
    const handler = (e: MouseEvent) => {
        if (elementRef.value) {
            // 点的是menu内部
            if (elementRef.value.contains(e.target as HTMLElement)) {
                isClickOutside.value = false
            } else {
                isClickOutside.value = true
            }
        }
    }
    onMounted(() => {
        document.addEventListener('click', handler)
    })
    // 内存回收
    onUnmounted(() => {
        document.removeEventListener('click', handler)
    })
    return { isClickOutside }
}
export default useClickOutside