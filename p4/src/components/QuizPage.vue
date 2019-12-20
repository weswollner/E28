<template>
  <div>
    <h3>Here is your quiz with questions from the categories of:</h3>
    <div v-for="categorySelected in selected" :key="categorySelected">{{categorySelected}}</div>
    <p>Good Luck!</p>
    <div v-for="(question, index) in questions" :key="question.id">
      <p>
        <b>Question: {{index + 1 }} of {{questions.length}}</b>
      </p>
      {{question.question}}
      <div v-if="question.question_type === 'exact'">
        <input
          :id="question.id"
          :key="question.id"
          v-model="answers[index]"
          placeholder="Enter answer"
        />
      </div>

      <div v-else-if="question.question_type === 'choice'">
        <select v-model="answers[index]">
          <option v-for="choice in question.choices" :key="choice">{{choice}}</option>
        </select>
      </div>
    </div>
    <p v-if="allQuestionsAnswered">
      <button @click="submitQuiz">Submit Quiz</button>
    </p>
    <p v-else-if="!allQuestionsAnswered">Answer all questions!</p>
  </div>
</template>

<script>
export default {
  name: "QuizPage",
  props: ["selected"],
  components: {},
  computed: {
    questions: function() {
      var allQuestionsForCategories = [];
      this.selected.forEach(questionCategory => {
        allQuestionsForCategories.push(
          this.$store.getters.getQuestionsByCategory(questionCategory)
        );
      });
      return allQuestionsForCategories.flat();
    },
    mixedQuestions: function() {
      let mixed = this.questions
        .map(a => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value);
      return mixed;
    },
    allQuestionsAnswered: function() {
      return this.questions.length == this.answers.length;
    }
  },
  methods: {
    submitQuiz: function() {
      this.$router.push({
        name: "results",
        params: { questions: this.questions, answers: this.answers }
      });
    }
  },
  data: function() {
    return {
      answers: []
    };
  }
};
</script>