import { ref } from 'vue';
import { defineStore } from 'pinia'

const THEME_KEY = '__theme__'

export const useThemeStore = defineStore('theme', () => {
    const theme = ref('red')
    const stoTheme = localStorage.getItem(THEME_KEY)
    if (stoTheme) {
        theme.value = stoTheme
    }
    const changeTheme = () => {
        if (theme.value === 'red') {
            theme.value = 'dark'
        } else {
            theme.value = 'red'
        }
        updateTheme()
    }
    const updateTheme = () => {
        localStorage.setItem(THEME_KEY,theme.value)
    }
    return {
        theme,
        changeTheme
    }
})