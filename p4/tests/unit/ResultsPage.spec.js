import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ResultsPage from '@/components/ResultsPage.vue'

describe('ResultsPage.vue', () => {
  it('shows completed quiz results', () => {
    let quiz = {
      answersSubmitted : [ 36, 33, 64 ],
      dateSubmitted : 12/19/2019,
      grade : 66.67,
      guid : "16f21507-1210-4000-8dfc-9d34e0f05400",
      questionsSubmitted : [ {
        answer : 36,
        category : "Multiplication",
        id : 1,
        question : "6 x 6 = ?",
        question_type : "exact",
        subject : "math"
      }, {
        answer : 49,
        category : "Multiplication",
        id : 2,
        question : "7 x 7 = ?",
        question_type : "exact",
        subject : "math"
      }, {
        answer : 64,
        category : "Multiplication",
        id : 3,
        question : "8 x 8 = ?",
        question_type : "exact",
        subject : "math"
      } ],
      timeSubmitted : "10:18:37 PM"
    }

    const wrapper = shallowMount(ResultsPage, {
      propsData: { quiz }
    })
    expect(wrapper.text()).to.include(quiz.grade)
  })
})
