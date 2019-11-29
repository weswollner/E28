<template>
  <div id="categories">
    <h2>Quiz Categories</h2>
    <show-category v-for="category in categories" :key="category" :category="category"></show-category>
  </div>
</template>

<script>
import ShowCategory from "./ShowCategory.vue";
export default {
  name: "QuizCategoriesPage",
  components: { ShowCategory },
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