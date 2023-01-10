const inquirer = require("inquirer");

const init = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "greeting",
        message: "Hello, my name is Turing. What is your name?",
      },
    ])
    .then((answer) => {
      console.log(`Hello, ${answer.greeting} it is very nice to meet you.`);
    })
    .then(() => {
      setTimeout(nextQuestion, 2000);
    });
};

const nextQuestion = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "feeling",
        message: "How are you feeling today?",
        choices: ["OK", "Great!", "Not Good", "Hmmm...Not Sure."],
      },
    ])
    .then((answer) => {
      const feelingLookup = {
        OK: "Thats good, I'm feeling ok too",
        "Great!": "Thats Awesome, I could tell you was in a good mood",
        "Not Good": "Thats a shame, do you want to talk about it?",
        "Hmmm...Not Sure.": "Thats ok, I have those kind of days too.",
      };
      console.log(feelingLookup[answer.feeling]);
    });
};

init();
