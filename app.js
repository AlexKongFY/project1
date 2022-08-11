console.log("game testing");

let container = document.getElementById("board-container");
let gameBoard = document.getElementById("board-game");

let totalPiece = 64;
let currentPlayer = "black"; // let first player is black to start off

// create the board

//create the squares in the grid board
for (let cell = 1; cell <= totalPiece; cell++) {
  let square = document.createElement("div");
  square.classList.add("square");
  square.setAttribute("id", `${cell}`);
  gameBoard.appendChild(square);
  document.body.appendChild(container);
  container.appendChild(gameBoard);
}

// Draw initial fixed white and black pieces before starting the game
document.getElementById("28").setAttribute("class", "black-piece");
document.getElementById("28").classList.add("square");
document.getElementById("29").setAttribute("class", "white-piece");
document.getElementById("29").classList.add("square");
document.getElementById("36").setAttribute("class", "white-piece");
document.getElementById("36").classList.add("square");
document.getElementById("37").setAttribute("class", "black-piece");
document.getElementById("37").classList.add("square");

// check disc in 4 directions => left, right, top and bottom

const changeDisc = (id) => {
  if (
    document.getElementById(id).classList.contains("black-piece") &&
    document.getElementById(`${id + 2}`).classList.contains("black-piece")
  ) {
    document.getElementById(`${id + 1}`).classList.toggle("white-piece");
    document.getElementById(`${id + 1}`).classList.add("black-piece");
  } else if (
    document.getElementById(id).classList.contains("black-piece") &&
    document.getElementById(`${id - 2}`).classList.contains("black-piece")
  ) {
    document.getElementById(`${id - 1}`).classList.toggle("white-piece");
    document.getElementById(`${id - 1}`).classList.add("black-piece");
  } else if (
    document.getElementById(id).classList.contains("black-piece") &&
    document.getElementById(`${id + 16}`).classList.contains("black-piece")
  ) {
    document.getElementById(`${id + 8}`).classList.toggle("white-piece");
    document.getElementById(`${id + 8}`).classList.add("black-piece");
  } else if (
    document.getElementById(id).classList.contains("black-piece") &&
    document.getElementById(`${id - 16}`).classList.contains("black-piece")
  ) {
    document.getElementById(`${id - 8}`).classList.toggle("white-piece");
    document.getElementById(`${id - 8}`).classList.add("black-piece");
  } else if (
    document.getElementById(id).classList.contains("white-piece") &&
    document.getElementById(`${id + 2}`).classList.contains("white-piece")
  ) {
    document.getElementById(`${id + 1}`).classList.toggle("black-piece");
    document.getElementById(`${id + 1}`).classList.add("white-piece");
  } else if (
    document.getElementById(id).classList.contains("white-piece") &&
    document.getElementById(`${id - 2}`).classList.contains("white-piece")
  ) {
    document.getElementById(`${id - 1}`).classList.toggle("black-piece");
    document.getElementById(`${id - 1}`).classList.add("white-piece");
  } else if (
    document.getElementById(id).classList.contains("white-piece") &&
    document.getElementById(`${id + 16}`).classList.contains("white-piece")
  ) {
    document.getElementById(`${id + 8}`).classList.toggle("black-piece");
    document.getElementById(`${id + 8}`).classList.add("white-piece");
  } else if (
    document.getElementById(id).classList.contains("white-piece") &&
    document.getElementById(`${id - 16}`).classList.contains("white-piece")
  ) {
    document.getElementById(`${id - 8}`).classList.toggle("black-piece");
    document.getElementById(`${id - 8}`).classList.add("white-piece");
  } else {
    return false;
  }
};

// restricts piece and stick close to the existing pieces
// empty false or true is valid move

const checkDiscLocation = (id) => {
  if (
    document.getElementById(`${id + 1}`).classList.contains("black-piece") ||
    document.getElementById(`${id + 1}`).classList.contains("white-piece")
  ) {
    return true;
  } else if (
    document.getElementById(`${id - 1}`).classList.contains("white-piece") ||
    document.getElementById(`${id - 1}`).classList.contains("black-piece")
  ) {
    return true;
  } else if (
    document.getElementById(`${id + 8}`).classList.contains("white-piece") ||
    document.getElementById(`${id + 8}`).classList.contains("black-piece")
  ) {
    return true;
  } else if (
    document.getElementById(`${id - 8}`).classList.contains("white-piece") ||
    document.getElementById(`${id - 8}`).classList.contains("black-piece")
  ) {
    return true;
  } else if (
    document
      .getElementById(`${id - 8 - 1}`)
      .classList.contains("white-piece") ||
    document.getElementById(`${id - 8 - 1}`).classList.contains("black-piece")
  ) {
    return true;
  } else if (
    document
      .getElementById(`${id - 8 + 1}`)
      .classList.contains("white-piece") ||
    document.getElementById(`${id - 8 + 1}`).classList.contains("black-piece")
  ) {
    return true;
  } else if (
    document
      .getElementById(`${id + 8 + 1}`)
      .classList.contains("white-piece") ||
    document.getElementById(`${id + 8 + 1}`).classList.contains("black-piece")
  ) {
    return true;
  } else if (
    document
      .getElementById(`${id + 8 - 1}`)
      .classList.contains("white-piece") ||
    document.getElementById(`${id + 8 - 1}`).classList.contains("black-piece")
  ) {
    return true;
  } else {
    return false;
  }
};

// click event listener on each square to test the board before drawing the discs
// create a function for each turn for each player (black first & then white)
// click and add a new black disc or white disc
// changing turns let first player is black then white

const createNewDiscs = () => {
  for (let num = 1; num <= totalPiece; num++) {
    let clickSquare = document.getElementById(`${num}`);

    clickSquare.addEventListener("click", (event) => {
      if (currentPlayer === "black") {
        checkDiscLocation(num);
        event.target.classList.add("black-piece");
        currentPlayer = "white";
      } else if (currentPlayer === "white") {
        checkDiscLocation(num);
        event.target.classList.add("white-piece");
        currentPlayer = "black";
      }
      changeDisc(num);
    });
  }
};

createNewDiscs();

// track scores of black and white pieces
// const checkPieceCount = () => {
//  for (let num = 1; num <= totalPiece; num++) {
//   let black = 0;
//   let white = 0;
//   black = totalPiece[num].classList.contains("black-piece");
//   white = totalPiece[num].classList.contains("white-piece");
//   black++;
//   white++;
//  }
// }
// let blackScore = document.getElementById("black-score");
// blackScore.innerHTML = `${black}`;
// let whiteScore = document.getElementById("white-score");
// whiteScore.innerHTML = `${white}`;
