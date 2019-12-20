var word = "";
var names = ["EVA", "ANNA", "BENJAMIN", "CLAIRE", "MARIE", "JOE", "FRANK", "ELIZABETH", "GABRIEL", "AMOS", "RACHEL",
    "ELIZA", "MADDIE", "TESS", "LUKE", "MATT", "ELLA", "DASH", "COLE", "BAYARD", "MARIO", "LUCAS", "EMMETT", "FELIX"];
var fruits =["BANANA", "APPLE", "KIWI", "ORANGE", "STARFRUIT", "DRAGONFRUIT", "BLUEBERRY", "RASPBERRY", "STRAWBERRY",
    "MANGO", "PEAR", "GRAPE", "LEMON", "LIME", "TOMATO", "WATERMELON", "MELON", "PEACH", "NECTARINE", "PAPAYA", "DURIAN"];
var cities = ["PARIS", "MADRID", "CHICAGO", "BERKELEY", "DUBAI", "LONDON", "SINGAPORE", "RICHMOND", "BERLIN", "FLORENCE",
    "SACRAMENTO", "VANCOUVER", "OTTAWA", "TORONTO", "DENVER", "AUSTIN", "MOSCOW", "TOKYO", "LIMA", "BRASILIA", "MONTEVIDEO", "HAVANA"];
var guesses = 6;
var guessedLetters = [];
var wrongLetters = [];
var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var images = ["images/rightleg.png", "images/leftleg.png", "images/rightarm.png", "images/leftarm.png", "images/body.png", "images/head.png"];
var gamesWon = 0;
var gamesLost = 0;

function addButtons(){
    var btn;
    var div = document.getElementById("buttonContainer");

    for(var i = 0; i < letters.length; i ++){
        btn = document.createElement("button");
        btn.setAttribute("id", letters[i]);
        btn.setAttribute("class","ltrBtn");
        btn.setAttribute("value",letters[i]);
        btn.setAttribute("onclick","guessLetter(this)");
        btn.innerHTML = letters[i];
        div.appendChild(btn);
    }
}

function startGame(){
    for(var i = 0; i < letters.length; i ++){
        document.getElementById(letters[i]).disabled = false;
    }
    guessedLetters = [];
    wrongLetters = [];
    guesses = 6;
    document.getElementById("wrongLetters").innerHTML = "";
    document.getElementById("lives").innerHTML = "";
    document.getElementById("gameOver").innerHTML = "";

    var theme = document.getElementById("categories").value;
    if(theme == "Choose Category"){
        document.getElementById("gameOver").innerHTML = "Please Select a Category"
    }else{
        if(theme == "Names"){
            word = names[Math.floor(Math.random() * names.length)];
        }else if(theme == "Fruits"){
            word = fruits[Math.floor(Math.random() * fruits.length)];
        }else if(theme == "Cities"){
            word = cities[Math.floor(Math.random() * cities.length)];
        }
        console.log(word);
        document.getElementById("lives").innerHTML = "You have " + guesses + " lives left. ";
        document.getElementById("im").innerHTML = "<img id='image' src='images/empty.png'>";
        printWord();
    }
}

function printWord(){
    var newWord = "";
    var left = word.length;
    for (var i = 0; i < word.length; i ++){
        if (guessedLetters.indexOf(word[i]) !== -1) {
            newWord += word[i] + " ";
            left --;
        }else{
            newWord += "_ ";
        }
    }
    console.log(newWord);
    document.getElementById("word").innerHTML = newWord;
    if(left === 0){
        document.getElementById("gameOver").innerHTML = "YOU WIN";
        gamesWon ++;
        document.getElementById("gamesWon").innerHTML = "Games Won: " + gamesWon;
        for(var j = 0; j < letters.length; j ++){
            document.getElementById(letters[j]).disabled = true;
        }
    }
}


function guessLetter(button){
    button.disabled = true;
    var letter = button.value;
    guessedLetters.push(letter);
    console.log(guessedLetters);
    printWord();
    if(word.indexOf(guessedLetters[guessedLetters.length - 1]) === -1){
        wrongLetters.push(guessedLetters[guessedLetters.length - 1]);
        document.getElementById("wrongLetters").innerHTML = wrongLetters;
        guesses --;
        document.getElementById("lives").innerHTML = "You have " + guesses + " lives left. ";
        document.getElementById("im").innerHTML = "<img id='image' src=''>";
        document.getElementById("image").src = images[guesses];
    }
    if(guesses === 0){
        document.getElementById("gameOver").innerHTML = "GAME OVER";
        for(var i = 0; i < letters.length; i ++){
            document.getElementById(letters[i]).disabled = true;
        }
        gamesLost ++;
        document.getElementById("gamesLost").innerHTML = "Games Lost: " + gamesLost;
        document.getElementById("wordWas").innerHTML = "Your word was " + word;
    }



}