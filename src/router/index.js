import Vue from "vue"
import VueRouter from "vue-router"
import MSite from "../pages/MSite/MSite.vue"
import Order from "../pages/Order/Order.vue"
import Profile from "../pages/Profile/Profile.vue"
import Search from "../pages/Search/Search.vue"
import Login from "../pages/Login/Login.vue"
import Shop from "../pages/Shop/Shop.vue"
import ShopComments from "../pages/Shop/ShopComments/ShopComments.vue"
import ShopInfo from "../pages/Shop/ShopInfo/ShopInfo.vue"
import ShopItems from "../pages/Shop/ShopItems/ShopItems.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: "/msite",
            component: MSite,
            meta: { //允许自定义对象
                showFooter: true
            }
        },
        {
            path: "/order",
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: "/profile",
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: "/search",
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/",
            redirect: "/msite"
        },
        {
            path: "/shop",
            component: Shop,
            children: [{
                    path: "/shop/shopcomments",
                    component: ShopComments
                },
                {
                    path: "/shop/shopinfo",
                    component: ShopInfo
                },
                {
                    path: "/shop/shopitems",
                    component: ShopItems
                },
                {
                    path: "",
                    redirect: "/shop/shopitems"
                }
            ],
        },

    ]
})