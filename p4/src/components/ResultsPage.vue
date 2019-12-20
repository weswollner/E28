<template>
  <div>
    <h3>Your Quiz Results:</h3>
    <div v-for="(question, index) in questions" :key="question.id">
      <p>
        <b>Question: {{index + 1 }} of {{questions.length}}</b>
      </p>
      {{question.question}}
      <p>Your answer: {{answers[index]}}</p>
      <p>Correct answer: {{question.answer}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultsPage",
  components: {},
  props: ["questions", "answers"],
  data: function() {
    return {};
  }
};
</script>