require("dotenv").config();
var needle = require("needle");

if (!process.env.KEY && !process.env.TOKEN) {
  throw new Error("API KEY and/or TOKEN found");
}

// ------------This works------------

// const url = "https://api.trello.com/1/cards";
// const data = {
//   key: process.env.KEY,
//   token: process.env.TOKEN,
//   idList: "6269afad9f4980101ab391a5",
//   name: `Card Nueva ${new Date()}`,
// };

// needle.post(url, data, null, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Card Added");
//   }
// });

// ------------This does too------------

const Trello = require("./main");
var trello = new Trello(process.env.KEY, process.env.TOKEN);

const listId = "6269afad9f4980101ab391a5";

trello.addCard(
  `Card 2 Nueva ${new Date()}`,
  "Descripción de la Card de Launch X",
  listId,
  (error, trelloCard) => {
    console.log(
      error
        ? `No se puedo crear la Card: ${error}`
        : `Card creada: ${trelloCard}`
    );
  }
);

const boardId = "6269afad9f4980101ab391a4";

trello.getListsOnBoard(
  boardId,
  null,
  (error, trelloCard) => {
    console.log(
      error
        ? `No se puedo crear la Card: ${error}`
        : `Card creada: ${trelloCard}`
    );
  }
);
