import { ref, onUnmounted, onMounted } from 'vue'

function useMouse() {
    let x = ref(0)
    let y = ref(0)
    const updated = (e:MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
    }

    onMounted(() => {
        window.addEventListener('mousemove', updated)
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', updated)
    })
    return {
        x, y
    }
}
export default useMouse