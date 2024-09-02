import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css'

// Тип для кожного питання
interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

// Массив питань типізовано
const questions: Question[] = [
  {
    question: "What does 'var' do in JavaScript?",
    answers: [
      "Declares a variable",
      "Declares a function",
      "Declares an object",
      "None of the above"
    ],
    correctAnswer: "Declares a variable",
  },
  {
    question: "Which of the following is a JavaScript framework?",
    answers: ["React", "Laravel", "Django", "Flask"],
    correctAnswer: "React",
  },
  {
    question: "Which method is used to convert JSON to a JavaScript object?",
    answers: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.objectify()",
      "JSON.convert()"
    ],
    correctAnswer: "JSON.parse()",
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    answers: ["String", "Number", "Boolean", "Float"],
    correctAnswer: "Float",
  },
  {
    question: "What keyword is used to declare a constant in JavaScript?",
    answers: ["let", "var", "const", "static"],
    correctAnswer: "const",
  },
  {
    question: "Which of the following is not a looping structure in JavaScript?",
    answers: ["for", "while", "foreach", "do-while"],
    correctAnswer: "foreach",
  },
  {
    question: "What is the correct syntax for a function declaration in JavaScript?",
    answers: [
      "function myFunction() {}",
      "def myFunction() {}",
      "func myFunction() {}",
      "function:myFunction() {}"
    ],
    correctAnswer: "function myFunction() {}",
  },
  {
    question: "How do you write a comment in JavaScript?",
    answers: ["<!-- Comment -->", "// Comment", "/* Comment */", "# Comment"],
    correctAnswer: "// Comment",
  },
  {
    question: "Which company developed JavaScript?",
    answers: ["Google", "Microsoft", "Netscape", "Sun Microsystems"],
    correctAnswer: "Netscape",
  },
  {
    question: "How do you create an array in JavaScript?",
    answers: [
      "var arr = []",
      "var arr = {}",
      "var arr = ()",
      "var arr = <>"
    ],
    correctAnswer: "var arr = []",
  },
  {
    question: "How can you add a comment in a JavaScript file?",
    answers: ["// This is a comment", "<!-- This is a comment -->", "# This is a comment", "* This is a comment"],
    correctAnswer: "// This is a comment",
  },
  {
    question: "What does the '===' operator do in JavaScript?",
    answers: [
      "Checks equality of both value and type",
      "Checks equality of value only",
      "Checks equality of type only",
      "Assigns a value"
    ],
    correctAnswer: "Checks equality of both value and type",
  },
  {
    question: "Which method is used to add an element to the end of an array?",
    answers: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: "push()",
  },
  {
    question: "How do you remove the last element from an array in JavaScript?",
    answers: ["pop()", "shift()", "remove()", "delete()"],
    correctAnswer: "pop()",
  },
  {
    question: "What is the output of `typeof NaN`?",
    answers: ["number", "NaN", "undefined", "object"],
    correctAnswer: "number",
  },
  {
    question: "Which method is used to round a number to the nearest integer?",
    answers: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.trunc()"],
    correctAnswer: "Math.round()",
  },
  {
    question: "What is the purpose of the `Array.prototype.map()` method?",
    answers: [
      "To filter elements of an array",
      "To create a new array by applying a function to each element",
      "To reduce the array to a single value",
      "To find the index of an element in an array"
    ],
    correctAnswer: "To create a new array by applying a function to each element",
  },
  {
    question: "What is the correct syntax for a ternary operator in JavaScript?",
    answers: [
      "condition ? expr1 : expr2",
      "condition ? expr1 ? expr2",
      "condition : expr1 ? expr2",
      "condition : expr1 : expr2"
    ],
    correctAnswer: "condition ? expr1 : expr2",
  },
  {
    question: "Which method is used to merge two or more arrays?",
    answers: ["concat()", "merge()", "append()", "join()"],
    correctAnswer: "concat()",
  },
  {
    question: "What does 'undefined' mean in JavaScript?",
    answers: [
      "A variable that has not been assigned a value",
      "An error in the code",
      "A null value",
      "A string that has no content"
    ],
    correctAnswer: "A variable that has not been assigned a value",
  },
  {
    question: "What is a promise in JavaScript?",
    answers: [
      "An object that represents the eventual completion or failure of an asynchronous operation",
      "A callback function",
      "A synchronous function",
      "An error handler"
    ],
    correctAnswer: "An object that represents the eventual completion or failure of an asynchronous operation",
  },
  {
    question: "How do you declare an asynchronous function in JavaScript?",
    answers: ["async function myFunction() {}", "async: function myFunction() {}", "function async myFunction() {}", "asynchronous function myFunction() {}"],
    correctAnswer: "async function myFunction() {}",
  },
  {
    question: "Which of the following is used to handle exceptions in JavaScript?",
    answers: ["try...catch", "throw...catch", "try...error", "catch...throw"],
    correctAnswer: "try...catch",
  },
  {
    question: "What is the purpose of the `this` keyword in JavaScript?",
    answers: [
      "Refers to the current object",
      "Refers to a global variable",
      "Refers to a local variable",
      "Refers to the previous function"
    ],
    correctAnswer: "Refers to the current object",
  },
  {
    question: "Which method can be used to convert a string to an integer?",
    answers: ["parseInt()", "parseFloat()", "Number()", "toString()"],
    correctAnswer: "parseInt()",
  },
  {
    question: "Which of the following is a valid JavaScript object?",
    answers: [
      "{ name: 'John', age: 30 }",
      "{ name: 'John'; age: 30 }",
      "[name: 'John', age: 30]",
      "(name: 'John', age: 30)"
    ],
    correctAnswer: "{ name: 'John', age: 30 }",
  },
  {
    question: "What does the `Array.prototype.filter()` method do?",
    answers: [
      "Filters elements from an array that pass a test",
      "Sorts the elements of an array",
      "Returns the first element of an array",
      "Combines all elements of an array into a string"
    ],
    correctAnswer: "Filters elements from an array that pass a test",
  },
  {
    question: "Which keyword is used to check if a property exists in an object?",
    answers: ["in", "exists", "hasOwnProperty", "propertyExists"],
    correctAnswer: "in",
  },
  {
    question: "What does `NaN` represent in JavaScript?",
    answers: [
      "Not a Number",
      "Null",
      "Negative Number",
      "Next available Number"
    ],
    correctAnswer: "Not a Number",
  },
  {
    question: "What is the output of `0 == false`?",
    answers: ["true", "false", "undefined", "TypeError"],
    correctAnswer: "true",
  }
];

const App: React.FC = () => {
  // Типізація станів
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  // Типізація параметра `answer`
  const handleAnswerOptionClick = (answer: string) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answer)}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


export default App