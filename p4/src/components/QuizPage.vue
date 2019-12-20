<template>
  <div>
    <h3>Here is your quiz with questions from the categories of:</h3>
    <div v-for="categorySelected in selectedCategories" :key="categorySelected">{{categorySelected}}</div>
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
import * as app from "./../app.js";
export default {
  name: "QuizPage",
  props: ["selectedCategories"],
  components: {},
  computed: {
    questions: function() {
      let allQuestionsForCategories = [];
      this.selectedCategories.forEach(questionCategory => {
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
      if (!this.formHasErrors) {
        let correctAnswers = [];
        this.questions.forEach(question => {
          correctAnswers.push(question.answer);
        });

        this.quiz = {
          guid: this.generateGuid(),
          questionsSubmitted: this.questions,
          answersSubmitted: this.answers,
          grade: this.gradeQuiz(this.answers, correctAnswers),
          dateSubmitted: new Date().toLocaleDateString(),
          timeSubmitted: new Date().toLocaleTimeString()
        };

        app.axios.post(app.config.api + "quizzes.json", this.quiz);

        this.$router.push({
          name: "results",
          params: { quiz: this.quiz }
        });
      }
    },
    gradeQuiz: function(submittedAnswers, correctAnswers) {
      let numberCorrect = 0;
      correctAnswers.forEach(function(correctAnswer, index) {
        if (correctAnswer == submittedAnswers[index]) {
          numberCorrect++;
        }
      });
      return ((numberCorrect / correctAnswers.length) * 100).toFixed(2);
    },
    // reference: https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    generateGuid: function() {
      let u =
        Date.now().toString(16) + Math.random().toString(16) + "0".repeat(16);
      let guid = [
        u.substr(0, 8),
        u.substr(8, 4),
        "4000-8" + u.substr(13, 3),
        u.substr(16, 12)
      ].join("-");
      return guid;
    }
  },
  data: function() {
    return {
      answers: [],
      quiz: null,
      formHasErrors: false
    };
  }
};
</script>