import $ from "jquery";
console.log($);
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

// click event listener on each square to test the board before drawing the discs
// create a function for each turn for each player (black first & then white)
// click and add a new black disc or white disc
// changing turns let first player is black then white

for (let num = 1; num <= totalPiece; num++) {
  let numId = num;
  let clickSquare = document.getElementById(`${numId}`);

  clickSquare.addEventListener("click", (event) => {
    if (currentPlayer === "black") {
      event.target.classList.add("black-piece");
      currentPlayer = "white";
    } else if (currentPlayer === "white") {
      event.target.classList.add("white-piece");
      currentPlayer = "black";
    }
  });
}

// ok so far for the code.

// clickSquare();

// const clickSpot = () => {
//   let affectedDiscs = checkAffectedDiscs();
//   if (affectedDiscs.length === 0) {
//     return false;
//   } else {
//     return true;
//   }
// };

// clickSpot();

// checks 8 directions of the placed color discs before flipping
// check for similar color discs to math
// return the list of affected discs to flip
// turn is either  black is 1 and white is 2. on discs array

// to flip right in a same row
// each class square got div and each square have an id
// piece are css in class-item

if ($("#37").hasClass("black-piece") === $("37 - 2").hasClass("black-piece")) {
  $("#36").removeClass("white-piece");
  // document.getElementById("36").getAttribute("white-piece");
  // document.getElementById("36").removeAttribute("white-piece");
  // document.getElementById("36").classList.replace("white-piece", "black-piece");
  // document.getElementById("36").classList.remove("white-piece");
  // document.getElementById("36").classList.toggle("white-piece");
  $("#36").addClass("black-piece");
}

// if (
//   document.getElementById("37").classList.contains("black-piece") ===
//   document.getElementById(`${37 - 8 - 8}`).classList.contains("black-piece")
// ) {
//   fixedDisc2.classList.add("black-piece");
//   fixedDisc2.classList.remove("white-piece");
// }

// track scores of black and white pieces
// const checkPieceCount = () => {
//   let ones = 0 refer to black(1)
//   let twos = 0 refer to white(2)
//  for (let num = 1; num <= totalPiece; num++) {
//   let value = discs[num];
//   if (value === 1) {
//     ones += 1;
//   } else if (value === 2) {
//     twos += 1;
//   }
// }
// let blackScore = document.getElementById("black-score");
// blackScore.innerHTML = ones;
// let whiteScore = document.getElementById("white-score");
// whiteScore.innerHTML - twos;

// if all pieces reach 64 piece then game ends.
// lf (ones + twos === totalPiece) {
//   alert ("Game over!")
// }

// id in html
// [1, 2, 3, 4, 5, 6, 7, 8],
// [9, 10, 11, 12, 13, 14, 15, 16],
// [17, 18, 19, 20, 21, 22, 23, 24],
// [25, 26, 27, 28, 29, 30, 31, 32],
// [33, 34, 35, 36, 37, 38, 39, 40],
// [41, 42, 43, 44, 45, 46, 47, 48],
// [49, 50, 51, 52, 53, 54, 55, 56],
// [57, 58, 59, 60, 61, 62, 63, 64],

// createBoard();
// render the display to look on the web pages

// let blackDisc = 1;
// let whiteDisc = 2;

// const clickedSquare(row, column) {
//     discs[row][column] = 1;
//     drawDiscs;
//     render();
// }

// const drawDiscs = () => {
//   discLayer.innerHTML = "";
//   for (let row = 0; row < 8; row++) {
//     for (let column = 0; column < 8; column++) {
//       let value = discs[row][column];
//       if (value === 0) {
//         return;
//       } else {
//         if (value === 1) {
//           return blackDiscs;
//         }
//         if (value === 2) {
//           return whiteDiscs;
//         }
//         discLayer.appendChild(blackDiscs);
//         discLayer.appendChild(whiteDiscs);
//       }
//     }
//   }
//   render();
// };

/*
Default start piece in html =
// [1,2] = [d4, e4]
// [2,1] = [d5, d5]
// */

// // check winner in game
// getWinner() {
//     let computer = 0;
//     let player = 0;

//     this.board.forEach((row, y) => {
//         row.forEach((col, x) => {
//             if (col === this.player) {
//                 player++;
//             } else if (col === this.computer) {
//                 computer++;
//             }
//         });
//     });

//     let winner = (computer > player)? "Game End, Computer Wins!" : "Game End, Player Wins!";

//     alert(winner);
//
