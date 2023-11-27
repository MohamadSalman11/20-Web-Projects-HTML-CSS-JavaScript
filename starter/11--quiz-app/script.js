let star = document.querySelector(".animation-star");
let points = document.querySelector(".points");
let question = document.querySelector(".question");
let currQueNr = document.querySelector(".current-que-nr");
let allQueNr = document.querySelector(".all-que-nr");
let answer1 = document.querySelector(".answer--1");
let answer2 = document.querySelector(".answer--2");
let answer3 = document.querySelector(".answer--3");
let answer4 = document.querySelector(".answer--4");

let userAnswer;
let number = 1;
let point = 0;

let quizzes = {
  quiz1: {
    que: "What is the capital of Germany?",
    choices: {
      choice1: "Munich",
      choice2: "Berlin",
      choice3: "Dortmund",
      choice4: "Frankfurt",
    },
    answer: "Berlin",
  },

  quiz2: {
    que: "What is the capital of France?",
    choices: {
      choice1: "Paris",
      choice2: "London",
      choice3: "Rome",
      choice4: "Berlin",
    },
    answer: "Paris",
  },

  quiz3: {
    que: "What is the capital of Canada?",
    choices: {
      choice1: "Toronto",
      choice2: "Montreal",
      choice3: "Vanvcouver",
      choice4: "Ottawa",
    },
    answer: "Ottawa",
  },

  quiz4: {
    que: "What is the capital of Australia?",
    choices: {
      choice1: "Sydney",
      choice2: "Melbourne",
      choice3: "Canberra",
      choice4: "Brisbane",
    },
    answer: "Canberra",
  },

  quiz5: {
    que: "What is the capital of Japan?",
    choices: {
      choice1: "Tokyo",
      choice2: "Osaka",
      choice3: "Kyoto",
      choice4: "Brisbane",
    },
    answer: "Tokyo",
  },
};
