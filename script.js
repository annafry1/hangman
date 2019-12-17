var word = "";
var names = ["EVA", "ANNA", "BENJAMIN"];
var fruits =["BANANA", "APPLE", "KIWI"];
var cities = ["PARIS", "MADRID", "CHICAGO"]
var guesses = 6;
var guessedLetters = [];
var wrongLetters = [];
var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','G','R','S','T','U','V','W','X','Y','Z'];


function addButtons(){
    var btn;
    var div = document.getElementById("buttonContainer");

    for(var i = 0; i < letters.length; i ++){
        btn = document.createElement("button");
        btn.setAttribute("class","ltrBtn");
        btn.setAttribute("value",letters[i]);
        btn.setAttribute("onclick","guessLetter(this)");
        btn.innerHTML = letters[i];
        div.appendChild(btn);
    }
}


function startGame(){
    document.getElementById("wrongLetters").innerHTML = "";
    document.getElementById("lives").innerHTML = "";
    document.getElementById("gameOver").innerHTML = "";
    guessedLetters = [];
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
        document.getElementById("lives").innerHTML = "You have 6 lives left. ";
        printWord();
    }
}

function printWord(){
    var newWord = "";
    for (var i = 0; i < word.length; i ++){
        if (guessedLetters.indexOf(word[i]) !== -1) {
            newWord += word[i] + " ";
        }else{
            newWord += "_ ";
        }
    }
    console.log(newWord);
    document.getElementById("word").innerHTML = newWord;
}


function guessLetter(button){
    //document.getElementById("output").innerHTML = button.value;
    var letter = button.value;
    guessedLetters.push(letter);
    console.log(guessedLetters);
    printWord();
    if(word.indexOf(guessedLetters[guessedLetters.length - 1]) === -1){
        wrongLetters.push(guessedLetters[guessedLetters.length - 1]);
        document.getElementById("wrongLetters").innerHTML = wrongLetters;
        guesses --;
        document.getElementById("lives").innerHTML = "You have " + guesses + " lives left. ";
    }
    if(guesses === 0){
        document.getElementById("gameOver").innerHTML = "GAME OVER";
    }
}