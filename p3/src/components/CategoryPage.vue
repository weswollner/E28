<template>
  <div v-if="category">
    <h2>{{ category }} Quiz</h2>
    <div v-for="question in questions" :key="question.id">{{ question.question }}</div>
  </div>
</template>

<script>
export default {
  name: "CategoryPage",
  props: ["category"],
  data: function() {
    return {};
  },
  computed: {
    questions: function() {
      return this.$store.getters.getQuestionsByCategory(this.category);
    }
  }
};
</script>

<style scoped>
</style>