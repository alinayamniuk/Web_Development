import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from "@/components/Main";
import FaceFactory from "@/components/FaceFactory";
import HairFactory from "@/components/HairFactory";
import NailFactory from "@/components/NailFactory";
import About from "@/components/About";
import Order from "@/components/Order";

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/face',
            name: 'FaceFactory',
            component: FaceFactory
        },
        {
            path: '/hair',
            name: 'HairFactory',
            component: HairFactory
        },
        {
            path: '/nail',
            name: 'NailFactory',
            component: NailFactory
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        },
    ]
    })