<template>
  <div>
    <p>Welcome to Quiz Time! To get started, choose from a category listed below...</p>
    <show-quiz-categories></show-quiz-categories>
  </div>
</template>

<script>
import ShowQuizCategories from "./ShowQuizCategories.vue";

export default {
  name: "HomePage",
  components: { ShowQuizCategories },
  data: function() {
    return {};
  }
};
</script>
