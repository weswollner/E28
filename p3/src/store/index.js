import Vue from 'vue'
import Vuex from 'vuex'

import * as app from './../app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        questions: [],
        answers:[]
    },
    mutations: {
        setQuestions(state, payload) {
            state.questions = payload;
        },
        updateAnswers(state,payload) {
            const found = state.answers.find(a => a.id === payload.id);
            if (!found) {
                state.answers.push(payload);
            }
        }
    },
    actions: {
        setQuestions(context) {
            app.axios.get("https://e28-project.firebaseio.com/" + 'questions.json').then(response => {
            context.commit('setQuestions', response.data);
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
        getAllAnswers(state) {
            return state.answers;
        }
    }
})