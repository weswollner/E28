<template>
  <div id="categories">
    <h2>Quiz Categories</h2>
    <show-quiz-category v-for="category in categories" :key="category" :category="category"></show-quiz-category>
  </div>
</template>

<script>
import ShowQuizCategory from "./ShowQuizCategory.vue";
export default {
  name: "ShowQuizCategories",
  components: { ShowQuizCategory },
  computed: {
    questions: function() {
      return this.$store.state.questions;
    },
    categories: function() {
      let categories = this.questions.map(question => question.category);
      let mergedCategories = [].concat.apply([], categories);

      return [...new Set(mergedCategories)].sort();
    }
  },
  data: function() {
    return {};
  }
};
</script>