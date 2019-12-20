<template>
  <div>
    <h3>Past Quizzes Taken:</h3>
    <div v-for="(quiz, index) in quizzes" :key="index">
      <ul>
        <li>
          <router-link :to="{ name: 'results', params: {'quiz' : quiz }}">
            <b>Questions Answered:</b>
            {{quiz.questionsSubmitted.length}}
            <b>Grade:</b>
            {{quiz.grade}}
            <b>Taken On:</b>
            {{quiz.dateSubmitted}}
            <b>At:</b>
            {{quiz.timeSubmitted}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PastQuizzes",
  computed: {
    quizzes: function() {
      this.$store.dispatch("setQuizzes");
      return this.$store.state.quizzes;
    }
  },
  data: function() {
    return {};
  }
};
</script>