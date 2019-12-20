<template>
  <div>
    <h3>Your Quiz Results:</h3>
    <p>Grade: {{quiz.grade}}</p>
    <div v-for="(question, index) in quiz.questionsSubmitted" :key="question.id">
      <p>
        <b>Question: {{index + 1 }} of {{quiz.questionsSubmitted.length}}</b>
      </p>
      {{question.question}}
      <p>Your answer: {{quiz.answersSubmitted[index]}}</p>
      <p>Correct answer: {{question.answer}}</p>
    </div>
    <p>
      <button @click="$router.push({name:'home'})">Take Another Quiz!</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "ResultsPage",
  components: {},
  props: ["quiz"],
  data: function() {
    return {};
  }
};
</script>