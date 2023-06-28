// import './App.css';
import { useState } from 'react'
import Todos from './Todos';

// App组件 react里面组件就是函数组件 函数式编程
function App() {
  /* react里面定义类名为什么用className?而不用class?
  组件函数返回值是一段JSX JS in XML(语法糖)
  JSX是html，会被AST(抽象语法树)分解成虚拟DOM，分词时class会被认为是一个类
  react类名用className vue是class */

  // vue const count = ref(1) count.value = 2
  // react 初始化和修改响应式的值
  // const [count, setCount] = useState(1)
  // setTimeout(() => {
  //   setCount(2)
  // }, 1000);
  // ()表示是整个的return 优先级
  return (
    // <div className="box">
    //   Hello World!
    // </div>
    /* css 容易出问题的地方在哪？容易覆盖 类的命名很麻烦 
    tailwindcss优点:不需要命名，不会冲突，不需要考虑兼容性
    css很少需要写了，插件Tailwind CSS IntelliSense，
    鼠标停在原子类名上就有样式 */
    // <div className='text-[14px] p-[10px] border-[3px]
    //  border-[#df092d] border-dotted hover:text-[30px]
    // bg-[#d44c4c] md:bg-blue-500'>
    //   Hello World    {count}
    // </div>
    <Todos></Todos>
  );
}

export default App;
