var word = "";
var words = ["Eva", "Anna", "Benjamin"];
var guesses = 6;
var guessedLetters = [];
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','g','r','s','t','u','v','w','x','y','z'];

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
    //document.getElementById("").innerHTML = "";
    //ocument.getElementById("").innerHTML = "";

    var theme = document.getElementById("categories").value;
    console.log(theme);
    word = words[Math.floor(Math.random() * words.length)];
    var dashes = "";
    for(var i = 0; i < word.length; i ++){
        dashes += "_ ";
    }
    document.getElementById("word").innerHTML = dashes;
}

function printWord(){

    for (var i = 0; i < word.length; i ++){

    }
}


function guessLetter(button){
    document.getElementById("output").innerHTML = button.value;
    var letter = button.value;
    console.log(letter);
}