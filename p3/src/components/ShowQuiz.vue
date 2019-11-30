<template>
  <div v-if="category">
    <h2>{{ category }} Quiz</h2>
    <show-question
      v-for="(question, index) in mixedQuestions"
      :key="question.id"
      :question="question"
      :index="index"
      :questionCount="questions.length"
    ></show-question>
    <p>
      <router-link :to="{name: 'ShowSubmittedQuiz'}">
        <button>Submit Quiz</button>
      </router-link>
    </p>
  </div>
</template>

<script>
import ShowQuestion from "./ShowQuestion.vue";
export default {
  name: "ShowQuiz",
  components: { ShowQuestion },
  props: ["category"],
  data: function() {
    return {
      submittedQuiz: false
    };
  },
  computed: {
    questions: function() {
      return this.$store.getters.getQuestionsByCategory(this.category);
    },
    mixedQuestions: function() {
      let shuffled = this.questions
        .map(a => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value);
      return shuffled;
    }
  }
};
</script>