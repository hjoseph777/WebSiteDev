//<!-- Quiz questions -->
const quizQuestions = [
    {
        question: "What is the capital of Canada?",
        options: ["London", "Ontario", "Ottawa", "Vancouver", "Calgary"],   
        correctAnswer: "Ottawa", //correctAnswer: "Ottawa" 
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars", //correctAnswer: "Mars"
    },
    {
        question: "Who is the prime minister of Canada?",
        options: ["Pierre Trudeau", "Donald Trump", "Justin Trudeau", "Kamala Harris ", "Vladimir Putin"],
        correctAnswer: "Justin Trudeau", //correctAnswer: "Justin Trudeau" 
    },
    {
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correctAnswer: "1945"
    }
];


// Function to display the quiz questions
function showQuiz() {
    var quizContainer = document.getElementById('quiz-container');
    var quizHTML = "";
    
    for (var i = 0; i < quizQuestions.length; i++) {
      quizHTML += "<p>" + (i + 1) + ". " + quizQuestions[i].question + "</p>";
      quizHTML += "<ul>";
      
      for (var j = 0; j < quizQuestions[i].options.length; j++) {
        var option = quizQuestions[i].options[j];
        quizHTML += "<li><input type='radio' name='q" + i + "' value='" + option + "'> " + option + "</li>";
      }
      
      quizHTML += "</ul><br>";
    }
    
    quizContainer.innerHTML = quizHTML;
  }
  
  // Function to check answers and display results
  function checkAnswers() {
    var score = 0;
    
    for (var i = 0; i < quizQuestions.length; i++) {
      var radios = document.getElementsByName('q' + i);
      var userAnswer = "";
      
      for (var j = 0; j < radios.length; j++) {
        if (radios[j].checked) {
          userAnswer = radios[j].value;
          break;
        }
      }
      
      if (userAnswer === quizQuestions[i].correctAnswer) {
        score++;
      }
    }
    
    var resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
  }
  
  // Show the quiz when the page loads
  window.onload = showQuiz;
  
  // Add click event to the submit button
  document.getElementById('submit-btn').onclick = checkAnswers;