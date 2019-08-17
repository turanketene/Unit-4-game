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
    
    console.log(targetScore);
    console.log("Blue: " + crystal.blue.value);
    console.log("Navy: " + crystal.navy.value);
    console.log("Red: " + crystal.red.value);
    console.log("Purple: " + crystal.purple.value);


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
    console.log("Your Score: " + currentScore);
}

// Check if user won or lost
var checkWin = function() {
    if (currentScore > targetScore){
        alert("You Lost! No Gems for you :((((");
        lossCount++
        $("#lossCount").html(lossCount);
        startGame();
        console.log ("shit");
    }
    else if (currentScore === targetScore){
        alert("Congrats! You Won!!! You're RICH! :DDDD");
        winCount++
        $("#winCount").html(winCount);
        startGame();
        console.log("Hell yeah");
    }
}

// Main Processes (Calling Functions)
// ======================================

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



