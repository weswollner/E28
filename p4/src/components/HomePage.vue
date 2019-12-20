<template>
  <div>
    <p>Welcome to Quiz Time! To get started, choose any number of categories listed below, then click start.</p>
    <h3>Quiz Categories:</h3>
    <div v-for="category in categories" :key="category" :category="category">
      <input type="checkbox" :value="category" :id="category" v-model="selectedCategories" />
      {{category}}
    </div>
    <p></p>
    <p v-if="categoryIsSelected">
      <button
        @click="$router.push({name:'quiz',params: {selected: selectedCategories},})"
      >Start Quiz</button>
    </p>
    <p v-else-if="!categoryIsSelected">Select a category</p>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  computed: {
    categories: function() {
      let categories = this.$store.state.questions.map(
        question => question.category
      );
      let mergedCategories = [].concat.apply([], categories);
      return [...new Set(mergedCategories)].sort();
    },
    categoryIsSelected: function() {
      return !(
        this.selectedCategories === undefined || this.selectedCategories == 0
      );
    }
  },
  data: function() {
    return {
      selectedCategories: []
    };
  }
};
</script>