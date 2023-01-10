const fsPromises = require("fs/promises");

const path = "./secret-message.txt";

const getSecretText = () => {
  return fsPromises.readFile(path, "utf-8").then((text) => {
    return text;
  });
};

getSecretText()
  .then((secretText) => {
    console.log(secretText);
    return secretText;
  })
  .catch((err) => {
    console.log(err);
  });
