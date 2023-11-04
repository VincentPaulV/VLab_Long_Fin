
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
      question: "1. A long fin is made of copper with a thermal conductivity of 400 W/mK. The fin is 10 cm long and has a cross-sectional area of 1 cm2. The heat transfer coefficient on the fin surface is 20 W/m2K. If the base temperature of the fin is 100°C, what is the heat transfer rate through the fin?",
      answers: {
        a: "200 W",
        b: "400 W",
        c: "600 W",
        d: "800 W"
      },
      correctAnswer: "a"
    },
    {
      question: "The temperature at the tip of a long fin is 50°C. The surrounding temperature is 20°C. The heat transfer coefficient on the fin surface is 20 W/m2K. If the thermal conductivity of the fin material is 200 W/mK, what is the length of the fin?",
      answers: {
        a: "1 cm",
        b: "3 cm",
        c: "4 cm",
        d: "5 cm"
      },
      correctAnswer: "d"
    },
    {
      question: "The heat transfer rate through a long fin is 100 W. The thermal conductivity of the fin material is 200 W/mK. The heat transfer coefficient on the fin surface is 20 W/m2K. If the base temperature of the fin is 100°C, what is the temperature at the tip of the fin?",
      answers: {
        a: "20°C",
        b: "40°C",
        c: "60°C",
        d: "80°C"
      },
      correctAnswer: "c"
    },

    {
      question: "What is one of the assumptions made in the analysis of fins?",
      answers: {
        a: "Constant thermal conductivity of the material",
        b: "Constant and uniform convection heat transfer coefficient over the entire surface of the fin",
        c: "Steady operation with no heat generation in the fin",
        d: "All of the above"
      },
      correctAnswer: "d"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
                                                                                                     