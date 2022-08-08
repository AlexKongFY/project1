console.log("game testing");

let container = document.getElementById("board-container");
let gameBoard = document.getElementById("board-game");

let totalPiece = 64;
let currentPlayer = "black";

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

// click event listener on each square to test the board before drawing the discs
// create a function for each turn for each player (black first & then white)
// click and add a new black disc or white disc
// first player is black then white

const getNewPiece = () => {
  for (let num = 1; num <= totalPiece; num++) {
    let numId = num;
    let clickSquare = document.getElementById(`${numId}`);
    clickSquare.addEventListener("click", (event) => {
      if (currentPlayer === "black") {
        event.target.classList.add("black-piece");
        currentPlayer = "white";
        console.log(currentPlayer);
      } else if (currentPlayer === "white") {
        event.target.classList.add("white-piece");
        currentPlayer = "black";
        console.log(currentPlayer);
      }
    });
  }
};

getNewPiece();

// Draw fixed white and black pieces before starting the game
let fixedDisc1 = document.getElementById("28");
fixedDisc1.classList.add("black-piece");

let fixedDisc2 = document.getElementById("29");
fixedDisc2.classList.add("white-piece");

let fixedDisc3 = document.getElementById("36");
fixedDisc3.classList.add("white-piece");

let fixedDisc4 = document.getElementById("37");
fixedDisc4.classList.add("black-piece");

// id in html
// [1, 2, 3, 4, 5, 6, 7, 8],
// [9, 10, 11, 12, 13, 14, 15, 16],
// [17, 18, 19, 20, 21, 22, 23, 24],
// [25, 26, 27, d4, d5, d6, d7, d8],
// [e1, e2, e3, e4, e5, e6, e7, e8],
// [f1, f2, f3, f4, f5, f6, f7, f8],
// [g1, g2, g3, g4, g5, g6, g7, g8],
// [h1, h2, h3, h4, h5, h6, h7, h8],

// const discs = [
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 2, 0, 0, 0],
//   [0, 0, 0, 2, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
// ];

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
