let game = [];

function play(playerMove){
    const playerId = document.getElementById("player");
    const clickedElement = document.getElementById(playerMove);
    if(playerId.innerText === "O" && game[playerMove] === undefined){
        playerId.innerText = "X";
        clickedElement.innerText = "O"
        game[playerMove] = "0"
    } else if(game[playerMove] === undefined){
        playerId.innerText = "O";
        clickedElement.innerText = "X"
        game[playerMove] = "X"
    }


// console.log(game);

const topLeft = game[0];
const topCenter = game[1];
const topRight = game[2];
const middleLeft = game[3];
const middleCenter = game[4];
const middleRight = game[5];
const bottomLeft = game[6];
const bottomCenter = game[7];
const bottomRight = game[8];

// Winning Combos

if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (
    middleLeft !== undefined &&
    middleLeft === middleCenter &&
    middleLeft === middleRight
  ) {
    alert(`${middleLeft} is the winner`);
    return;
  }
  if (
    bottomLeft !== undefined &&
    bottomLeft === bottomCenter &&
    bottomLeft === bottomRight
  ) {
    alert(`${bottomLeft} is the winner`);
    return;
  }
  if (
    topLeft !== undefined &&
    topLeft === middleLeft &&
    topLeft === bottomLeft
  ) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (
    topCenter !== undefined &&
    topCenter === middleCenter &&
    topCenter === bottomCenter
  ) {
    alert(`${topCenter} is the winner`);
    return;
  }
  if (
    topRight !== undefined &&
    topRight === middleRight &&
    topRight === bottomRight
  ) {
    alert(`${topRight} is the winner`);
    return;
  }
  if (
    topLeft !== undefined &&
    topLeft === middleCenter &&
    topLeft === bottomRight
  ) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (
    bottomLeft !== undefined &&
    bottomLeft === middleCenter &&
    bottomLeft === topRight
  ) {
    alert(`${bottomLeft} is the winner`);
    return;
  }

  // Determines if the board is full
  let boardFull = true;
  for(let i = 0; i <= 8; i++) {
      if(game[i] === undefined) {
          boardFull = false;
      }
  }
  if (boardFull === true) {
      alert("Cat's game, there is no winner")
  }

}
/* Own words

-First, we create our function play.
-Then, we create a variable to store our player. On the website this is an 'X' or an 'O'. This is playerId.
- Had to change HTML to start at O instead of X
- This means that when clicked, it will run through function, and in the if-clause, if it's 'O' it will change it to an 'X'. Otherwise it will change it to 'O'
-The innerText allows this to show on the screen
-Second part, I created the variable clickedElement. It's purpose is to put an 'X' or 'O' in the appropriate div
-If I click on the first div of the table, it will run '0' through my function play()
-In the function it would pass '0' into playerMove (Remember, that playerMove does not need quotations (took my a long time to figure this out))
-In my HTML file the id="O" refers to the first div, so by clicking on the first box in the table, I will focusing on that div
-Adding that variable clickedElement to an inner.Text in my if-statement will change the content of that div - I say div but it actually refers to 'td'
-Next, I created an empty array named Game that will keep track of the index of each move from the players

-Added the && game[playerMove] to make it so that you cannot choose a square that's already been taken

*/

