import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const axios = require('axios');
const config = {
    api: 'https://e28-project.firebaseio.com/',
}

export default new Vuex.Store({
    state: {
        questions: [],
        answers:[]
    },
    mutations: {
        SET_QUESTIONS(state, payload) {
            state.questions = payload;
        },
        UPDATE_ANSWERS(state,payload) {
            const found = state.answers.find(a => a.id === payload.id);
            if (!found) {
                state.answers.push(payload);
            }
        }
    },
    actions: {
        setQuestions(context) {
            axios.get(config.api + 'questions.json').then(response => {
            context.commit('SET_QUESTIONS', response.data);
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