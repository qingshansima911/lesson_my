import { ref, Ref } from "vue";
import { defineStore } from "pinia";

type Product = {
    id: number
    title: string
    price: string
    description: string
    category: string
    image: string
}
export const useProductsStore = defineStore('products', () => {
    const all: Ref<Product[]> = ref([])
    const fetchAll = async () => {
        const res = await fetch(`https://fakestoreapi.com/products`)
        // console.log(res);
        const data:Product[] = await res.json()
        all.value = data
    }
    return {
        all,
        fetchAll
    }
})