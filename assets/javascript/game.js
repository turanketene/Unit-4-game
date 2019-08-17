// Global Variables
// ======================================
// Crystal Variables
var crystal= {
    blue: {
        value: 0
    },
    navy: {
        value: 0
    },
    red: {
        value: 0
    },
    purple: {
        value: 0
    }
}
// Current and Target Scores
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


// Functions
// ======================================
var getRandom = function (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var startGame = function () {

    // Reset Current Score
    currentScore = 0;
    // Set a new target score (between 19 and 120)
    targetScore = getRandom (19,120);
    // Set random values for each crystal between 1 and 12
    crystal.blue.value = getRandom (1, 12);
    crystal.navy.value = getRandom (1, 12);
    crystal.red.value = getRandom (1, 12);
    crystal.purple.value = getRandom (1, 12);
    // Reflect changes to HTML
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
}

// Adding Values to current score after clicking crystals
var addValues = function(crystal){
    // Change Current Score
    currentScore = currentScore + crystal.value;
    // calling checkWin function
    checkWin();
    // Reflect to HTML
    $("#yourScore").html(currentScore);
}

// Check if user won or lost
var checkWin = function() {
    if (currentScore > targetScore){
        alert("You Lost! No Gems for you :((((");
        lossCount++
        $("#lossCount").html(lossCount);
        startGame(); 
    }
    else if (currentScore === targetScore){
        alert("Congrats! You Won!!! You're RICH! :DDDD");
        winCount++
        $("#winCount").html(winCount);
        startGame();
    }
}



// click function
$("#blue").click(function() {
addValues(crystal.blue);
});
$("#navy").click(function() {
addValues(crystal.navy);
});
$("#red").click(function() {
addValues(crystal.red);
});
$("#purple").click(function() {
addValues(crystal.purple);
});
    

startGame();


// PSEUDOCODE
// 1. Create variables for the game (Win count, loss count, target score, your score, crystals)
// 2. Random generate a number for target score and crystal value
// 3. Clicking crystals must generate response, add value to "your score"
// 4. If your score equals target score, we win, add a point to wins count
// 5. If your score is more than target score, we lose, add point to losses count
// 6. After win or loss, game resets, target score becomes a different number, your score resets back to zero, crystals assigned a new value.


