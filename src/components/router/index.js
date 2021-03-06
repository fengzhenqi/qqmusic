import Vue from 'vue'
import VueRouter from 'vue-router'

// https://www.cnblogs.com/lxk0301/p/11671256.html
// 解决莫名其妙的报错 重写了一个push方法
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
Vue.use(VueRouter)

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    {
        path: '/musichome', component: () => import ("./components/musichome/musichome.vue")
    },
    {
        path: '/tuijian', component: () => import ("./components/tuijian/tuijian.vue")
    },
    {
        path: '/dongtai', component: () => import ("./components/dongtai/dongtai.vue")
    },
    {
        path: '/my', component: () => import ("./components/my/my.vue")
    },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router