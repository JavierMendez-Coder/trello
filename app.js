require("dotenv").config();
var needle = require("needle");

if (!process.env.KEY && !process.env.TOKEN) {
  throw new Error("API KEY and/or TOKEN found");
}

const Trello = require("./main");
var trello = new Trello(process.env.KEY, process.env.TOKEN);

const listId = "6269afad9f4980101ab391a5";

trello.addCard(
  `Card 2 Nueva ${new Date()}`,
  "Descripción de la Card de Launch X",
  listId,
  (error, trelloCard) => {
    error
      ? `No se puedo crear la Card: ${error}`
      : `Card creada: ${trelloCard}`;
  }
);
