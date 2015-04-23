

var drawNumber = function() {
   
   var result = (Math.random() * 100);  
    return Math.round(result);

};


var form = document.getElementsByTagName("form")[0];
var p = document.getElementsByTagName("p")[0];
var div = document.getElementsByTagName("div")[0];
var div2 = document.createElement('div');
//div.setAttribute("id", "info");
document.body.appendChild(div2);

var guesses = [];
var noOfGuessesInfo = "Number of trials: "
var compChoice = drawNumber();
    // sprawdzenie
    console.log(compChoice);




form.addEventListener("submit", function(e) {
	// zapobiegamy domyślnej akcji przeglądarki
	e.preventDefault();
    setInterval(function () {}, 1000);


    var playerChoice = form.userChoice.value;
    console.log(playerChoice);

    
    if (isNaN(playerChoice)) {
        

    } else if (compChoice > playerChoice) {
        div.innerHTML = "Try higher";
        form.userChoice.value = "";
        guesses.push("1guess");

        div2.innerHTML = noOfGuessesInfo + String(guesses.length);

    } else if (compChoice < playerChoice) {
        div.innerHTML = "Try lower";
        form.userChoice.value = "";

        guesses.push("1guess");
        div2.innerHTML = noOfGuessesInfo + String(guesses.length)
    } else {
        div.innerHTML = "Congratulations!!! You're right";
        form.userChoice.value = "";
        var endOfGame = function () { 
            form.removeChild(p);

        guesses.push("1guess");
        div2.innerHTML = noOfGuessesInfo + String(guesses.length)    
        };    
        endOfGame();    
        
    };

});

