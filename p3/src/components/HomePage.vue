<template>
  <div>
    <p>To get started, choose a category listed below...</p>
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
