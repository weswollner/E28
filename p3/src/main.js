import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ShowQuiz from './components/ShowQuiz.vue';
import HomePage from './components/HomePage.vue';
import ShowSubmittedQuiz from './components/ShowSubmittedQuiz';

import store from './store'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/category/:category', component: ShowQuiz, name: 'category', props: true },
    { path: '/ShowSubmittedQuiz', component: ShowSubmittedQuiz, name: 'ShowSubmittedQuiz', props: true },
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
