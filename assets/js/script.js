// TODO: Declare any global variables we need

// This is just a sanity check to make sure your JavaScript script is getting loaded
// You can remove it once you see it in your browser console in the developer tools

// TODO: Add event listener and handler for flip and clear buttons

// Flip Button Click Handler
// TODO: Determine flip outcome
// TODO: Update image and status message in the DOM

// Update the scorboard
// TODO: Calculate the total number of rolls/flips
// Make variables to track the percentages of heads and tails
// TODO: Use the calculated total to calculate the percentages
// HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
// TODO: Update the display of each table cell

// Clear Button Click Handler
// TODO: Reset global variables to 0
// TODO: Update the scoreboard (same logic as in flip button click handler)

// select all of my element (hungurian notation $)

//IFFE - this imediateky runs the code.
(function () {
  //select all of my elements (hungarian notations uses $ signs)
  const $flipButton = document.querySelector("#flip");
  const $clearButton = document.querySelector("#clear");
  const $pennyImage = document.querySelector("#penny-image");
  const $message = document.querySelector("#message");
  const $headsValue = document.querySelector("#heads");
  const $headsPercent = document.querySelector("#heads-percent");
  const $tailsValue = document.querySelector("#tails");
  const $tailsPercent = document.querySelector("#tails-percent");

  let scoreBoard = {
    heads: 0,
    percentageHeads: 0,
    tails: 0,
    percentageTails: 0,
    totalFlips: 0,
  };

  function changeScoreBoard() {
    $headsValue.textContent = `${scoreBoard.heads}`;
    $headsPercent.textContent = `${Math.round(scoreBoard.percentageHeads)}%`;
    $tailsValue.textContent = `${scoreBoard.tails}`;
    $tailsPercent.textContent = `${Math.round(scoreBoard.percentageTails)}%`;
  }
  //I made a function for changing the percentages for tails and heads to match the counts
  function changePercentages() {
    scoreBoard.percentageHeads =
      (scoreBoard.heads / scoreBoard.totalFlips) * 100;
    scoreBoard.percentageTails =
      (scoreBoard.tails / scoreBoard.totalFlips) * 100;
  }

  function handleFlipButtonClick() {
    //figure out if it flipped heads or tails
    const headsOrTails = Math.random() < 0.5;
    // math.random will pick a number between 0 and 1. if its greater than .5 it will get true
    //if its lover than .5 it will give false.

    if (headsOrTails) {
      //if it flipped heads, do this
      // total filps increase by 1
      scoreBoard.totalFlips += 1;
      // number of heads to increase by 1
      scoreBoard.heads += 1;
      //pecentage heads to increase
      changePercentages();

      //penny image to show heads
      $pennyImage.setAttribute("src", "assets/images/penny-heads.jpg");
      //change the image to say you flipped heads
      $message.textContent = "You flipped Heads!";

      changeScoreBoard();
    } else {
      //if it flipped tails, do this
      // total flips increase by 1
      scoreBoard.totalFlips += 1;
      // number of tails to increase by 1
      scoreBoard.tails += 1;
      //pecentage tails to increase
      changePercentages();

      //penny image to show tails
      $pennyImage.setAttribute("src", "assets/images/penny-tails.jpg");
      //change the image to say you flipped tails
      $message.textContent = "You flipped Tails!";

      changeScoreBoard();
    }
  }

  function handleClearButtonClick() {
    //clear the scoreboard
    scoreBoard = {
      heads: 0,
      percentageHeads: 0,
      tails: 0,
      percentageTails: 0,
      totalFlips: 0,
    };
    //make sure the html shows all 0's

    changeScoreBoard();

    //change the message to Let's get rolling!
    $message.textContent = `Let's Get Rolling!`;
    //change the image to just heads
    $pennyImage.setAttribute("src", "assets/images/penny-heads.jpg");
  }

  function setUpEventListener() {
    //Listen for clicks on my buttons
    $flipButton.addEventListener("click", function () {
      handleFlipButtonClick();
    });

    $clearButton.addEventListener("click", function () {
      handleClearButtonClick();
    });
  }

  function init() {
    //runs all the code inside of my page
    //as soon as go to my projects, I can look for init and can follow what init does to understand the project
    //setuo event listener for the buttons
    setUpEventListener();
  }
  init();
})();
