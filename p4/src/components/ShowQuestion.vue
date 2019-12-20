<template>
  <div v-if="question">
    <p>
      <b>Question: {{index + 1 }} of {{questionCount}}</b>
    </p>
    <div>{{question.question}}</div>
    <div v-if="question.question_type === 'exact'">
      <input :disabled="submittedAnswer" v-model="answer" placeholder="Enter your answer" />
    </div>

    <div v-else-if="question.question_type === 'choice'">
      <select :disabled="submittedAnswer" v-model="answer">
        <option v-for="choice in question.choices" :key="choice" v-bind:value="choice">{{choice}}</option>
      </select>
    </div>

    <div v-if="answer !== null">
      <button :disabled="submittedAnswer" @click="addAnswer(answer,question.id)">Submit Answer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowQuiz",
  props: ["question", "choice", "index", "questionCount"],
  data: function() {
    return {
      answer: null,
      submittedAnswer: false
    };
  },
  methods: {
    addAnswer: function(answer, id) {
      this.$store.commit("updateAnswers", { id, answer });
      this.submittedAnswer = true;
    }
  }
};
</script>