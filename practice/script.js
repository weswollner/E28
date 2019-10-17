let app = new Vue({
    el: '#app',
    data: {
        guessCount: 0,
        word: 'mississippi',
        firstName: 'Susan',
        lastName: 'Buck',
        playerName: null,
        guess: null,
        guesses: [],
        results: null,
        settings: {
            max: 200,
            type: 'numeric',
            guessLimit: 15
        },
        answer: 55,
        guessesDetailed: [
            { guess: 15, result: 'low' },
            { guess: 60, result: 'high' },
            { guess: 50, result: 'low' },
        ]
    },
    computed: {
        highGuesses: function () {
            return this.guesses.filter(function (number) {
                console.log('here');
                return number > this.answer;
            });
        },
        lowGuesses: function () {
            return this.guesses.filter(function (number) {
                return number < this.answer;
            });
        },
        name: function () {
            return this.firstName + ' ' + this.lastName
        },
        displayWord: function () {
            var wordAsArray = this.word.split("");

            for (var i = 0; i < wordAsArray.length; i += 2) {
                wordAsArray[i] = "_";
            }
            return wordAsArray.join("");
        }
    },
    watch: {
        guessCount: function () {
            if (this.guessCount > 5) {
                alert("You ran out of guesses :(");
                // Other code would go here to "reset" the game
            }
        }
    },
    methods: {
        getName: function () {
            return this.firstName + ' ' + this.lastName;
        },
        submitGuess() {
            this.guesses.push(this.guess);
            this.guessCount++;
        },
    }
});