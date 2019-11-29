<template>
  <div>
    <p>To get started, choose a category listed below...</p>
    <quiz-categories-page></quiz-categories-page>
  </div>
</template>

<script>
import QuizCategoriesPage from "./QuizCategoriesPage.vue";

export default {
  name: "HomePage",
  components: { QuizCategoriesPage },
  data: function() {
    return {};
  }
};
</script>
