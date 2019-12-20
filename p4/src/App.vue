<template>
  <div id="app">
    <h1>It's Quiz Time!</h1>
    <nav>
      <div v-for="link in links" :key="link">
        <router-link exact :to="{ name: link }">{{ link }}</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data: function() {
    return { links: ["home", "quizzes"] };
  },
  mounted() {
    this.$store.dispatch("setQuestions");
    this.$store.dispatch("setQuizzes");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>