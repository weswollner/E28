import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import * as app from './../app.js';

export default new Vuex.Store({
    state: {
        questions: [],
        quizzes: []
    },
    mutations: {
        SET_QUESTIONS(state, payload) {
            state.questions = payload;
        },
        SET_QUIZZES(state, payload) {
            state.quizzes = payload;
        }
    },
    actions: {
        setQuestions(context) {
            app.axios.get(app.config.api + 'questions.json').then(response => {
            context.commit('SET_QUESTIONS', response.data);
            });
        },
        setQuizzes(context) {
            app.axios.get(app.config.api + 'quizzes.json').then(response => {
            context.commit('SET_QUIZZES', response.data);
            });
        }
    },
    getters: {
        getQuestionsByCategory(state) {
            return function (category) {
                return state.questions.filter(function(question){
                    return question.category === category;
                    })
                }
        },
    }
})