export function patchData(el, key, prevValue, nextValue) {
    switch (key) {
        case 'style':
            for (let k in nextValue) {
                el.style[k] = nextValue[k] //行内样式要少用 
            }
            for (let k in prevData.style) {
                if (!nextValue.hasOwnProperty(k)) {
                    el.style[k] = '' //删除
                }
            }
            break
        case 'class':
            el.className = nextValue
            break
        default:
            const domPropsRE = /\[A-Z]|^(?:value|checked|selected|muted)$/;
            if (key[0] === 'o' && key[1] === 'n') {
                
            } else if (domPropsRE.test(key)) {
                // key属于dom原生的属性
                el[key] = nextValue
            } else {
                // key不属于dom原生的属性
                el.setAttribute(key, nextValue)
            }
            break
    }
}