<template>
  <div>
    <h1>Your Quiz Results:</h1>
    <!-- <div v-for="result in results" :key="result.id" :result="result">Question: {{result}}</div> -->
  </div>
</template>

<script>
export default {
  name: "ShowSubmittedQuiz",
  components: {},
  data: function() {
    return {};
  },
  computed: {
    questions: function() {
      return this.$store.getters.getQuestionsByCategory(this.category);
    }
    // results: function() {
    //   return this.$store.getters.getAllAnswers();
    // }
  }
};
</script>