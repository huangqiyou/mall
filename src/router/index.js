import Vue from 'vue'
import Router from 'vue-router'

const Home = () =>
    import ('../views/home/Home')
const Cart = () =>
    import ('../views/cart/Cart')
const Category = () =>
    import ('../views/category/Category')
const My = () =>
    import ('../views/my/My')

Vue.use(Router)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: { title: '首页' }
    },
    {
        path: '/category',
        component: Category,
        meta: { title: '分类' }
    },
    {
        path: '/cart',
        component: Cart,
        meta: { title: '购物车' }
    },
    {
        path: '/my',
        component: My,
        meta: { title: '我的' }
    },
]

const router = new Router({
    routes,
    mode: 'history' //history模式地址栏就不会有#
})

router.beforeEach((to, from, next) => {
    //修改标题
    document.title = to.matched[0].meta.title
    next()
})
export default router;