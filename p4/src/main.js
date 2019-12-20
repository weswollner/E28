import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import QuizPage from './components/QuizPage.vue';
import ResultsPage from './components/ResultsPage';
import PastQuizzesPage from './components/PastQuizzesPage';

import store from './store'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/quiz', component: QuizPage, name: 'quiz', props: true },
    { path: '/results', component: ResultsPage, name: 'results', props: true },
    { path: '/quizzes', component: PastQuizzesPage, name: 'quizzes' },
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
