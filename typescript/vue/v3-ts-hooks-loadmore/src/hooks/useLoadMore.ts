/**
 * 加载更多的按钮
 * page 加载第几页
 * mvvm proxy list
 * 函数式编程更加淋漓尽致
 */
import { computed, ref } from 'vue'
const useLoadMore = () => {
    const currentPage = ref(0)
    const loadMorePage = () => {

    }
    const isLastPage = computed(() => {
        // return Math.ceil(total.value / pageSize) < currentPage.value
    })
    return {
        loadMorePage, // 函数
        isLastPage, // 最后一页
        currentPage // 当前页
    }
}

export default useLoadMore
