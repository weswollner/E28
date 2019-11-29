import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import CategoryPage from './components/CategoryPage.vue';
import HomePage from './components/HomePage.vue';

import store from './store'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/category/:category', component: CategoryPage, name: 'category', props: true },
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

new Vue({
    router: router,
    store: store,
    render: h => h(App),
}).$mount('#app')
