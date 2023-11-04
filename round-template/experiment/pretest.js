
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

const myQuestions = [
  {
    question: "The temperature distribution along a long fin is given by the equation T = (T<sub>0</sub> - T<sub>∞</sub>)*e<sup>(-mx)</sup>, where T<sub>0</sub> is the base temperature, T<sub>∞</sub> is the surrounding temperature, m is a constant, and x is the distance from the base of the fin. If m increases, what happens to the temperature drop along the length of the fin?",
    answers: {
      a: " The temperature drop increases.",
      b: " The temperature drop decreases.",
      c: "The temperature drop remains the same.",
      d: "It cannot be determined from the information given."
    },
    correctAnswer: "a"
  },

  {
    question: "A long fin is made of two materials, with different thermal conductivities. The heat transfer coefficient on the fin surface is the same for both materials. If the length of the fin is the same for both materials, which material will have the higher heat transfer rate?",
    answers: {
      a: "The material with the higher thermal conductivity.",
      b: "The material with the lower thermal conductivity.",
      c: "It cannot be determined from the information given.",
    },
    correctAnswer: "a"
  },

  {
    question: "What is the main purpose of fins in heat transfer?",
    answers: {
      a: "To increase the surface area for convection",
      b: "To decrease the thermal conductivity of the material",
      c: "To prevent heat loss"
    },
    correctAnswer: "a"
  },

  {
    question: "Why is it important to consider the variation of the convection heat transfer coefficient along the fin in the analysis of fins?",
    answers: {
      a: "Because the convection heat transfer coefficient is a strong function of the fluid motion at that point",
      b: "Because the value of h is usually much lower at the fin base than it is at the fin tip",
      c: "All the above"
    },
    correctAnswer: "c"
  }
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
       