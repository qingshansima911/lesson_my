- npm run dev  运行的流程
    1. package.json script 脚本
        dev development 开发阶段  src/
        build   开发完了，答辩上线做准备 dist/
    2. vite 最快的工程化
        index.html首页 3000 http-server
        启动起来
    3. src/main.js作为单点入库文件
        vite特别之处，script type="module" js支持es6的模块化
        实例化vue app
        并把App组件挂载到#app节点上
    4. 基于模块依赖 代码组织起来

- redirect 细节
    1. localhost:3000/
        HTTP 请求响应式的
        - index.html已经发送到浏览器并显示
        - App.vue已挂载
    2. router
        / redirect
        302 /introduce

    header + main.content
    导航 nav App.vue + router-view 页面级别组件

- 路由守卫
    1. 鉴权
        to + token +login meta
    2. document.title + name匹配的标题 utils config.js
    3. layout 布局状态 login不需要侧边栏
    4. 用户直接从非/ 进入，分享点击
        state.currentPath = to.path

- 表单组件
    el-form
    el-form-item
    el-input
    容器组件
    子组件  受控组件
    - label-position
    - :rules="state.rules"   在el-form容器组件中统一设置
        数组 每个input的输入规则
    - ：model='state.formData'表单为收集数据而来
        {
            "username":;
            "password":
        }
        el-form-item prop="username"
            el-input v-model="state.formData.username"
    - ref="loginForm"
        el-form对象组件也是对象 这个对象上的方法


- vue 登录
    1. 选择何种登录方案 
        cookie(不安全) jwt  token(主流)     
        服务器端签发    有效期，域名限制    
        前端在axios接口请求中默认带上请求头 
        axios.defaults.headers['token']=getLocal('token') ||''

    2. vue-router app.vue全局
        路由守卫    getLocal + require login  ->login

    3. 头像及昵称这些信息？
        - /profile API 登录 {name; age; avatar;}

- 用户信息 数据 页面显示的各种需求
    1. 当前组件请求，当前组件显示，私有状态 
        onMounted async -> await api axios ->state reactive ->bind自动更新
    2. 共享用户数据信息 怎么办
        - pinia 托管一下 数据中央管理
            全家桶老三 pinia  银行 共享数据
        - localStorage 

- pinia的使用流程   财务 更专业的管理共享状态   store
    1. 小型项目没有必要
    2. 全家桶中的数据管理，难
        - mian.js入口文件 use()启用createPinia()
        - user.js 用户状态模块
            const useUserStore = defineStore('user',()=>{
                const profile = {}
                const setProfile=()=>{

                }

                return{
                    状态的初始值
                    修改这个状态的方法  走正规流程
                }
            }   
        - 使用共享状态的地方
            useUserStore();
            读这个状态  userStore.profile
            写这个状态？ userStore.profile={....}NO
                setProfile()...
