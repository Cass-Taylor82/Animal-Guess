const inputs = document.querySelector(".inputs");
resetBtn = document.querySelector(".reset-btn");
hintTag = document.querySelector(".hint span");

typingInput = document.querySelector(".typing-Input");

let word, incorrects = {};

function randomWord() {
    let ranObj = wordlist[Math.floor(Math.random() * wordList.length)];
    let word = ranObj.word;
    console.log (word);

    hint.innertext = ranObj.hint;

    let html ="";
    for (let i = 0; i < array.length; i++) {
       html += `<input type="text disabled>`;
    }
    inputs.innerHTML = html;
}
randomWord();

function initGame (e) {
    let key = e.target.value;
    if (key.match(/^[A.Z a.z]+$/) && !incorrects.includes.includes(`${key}`)) {
        console.log(key);
        if (word.includes (key)) {
            for(let i = 0; i < word.length;i++) {
                if(word[i] === key) {
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            incorrects.push(` ${key}`);
        }
    }
    wrongLetter.innerText = incorrects;
    typingInput.value = "";
}

resetBtn.addEventListener("click", randomWord);
    
    guessLeft = document.querySelector(".guess-left span"),
    wrongLetter = document.querySelector(".wrong-letter span"),
    
    

let word, maxGuess, incorrectLetters = [], correctLetters = [];

function randomWord() {
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem, word;
    maxGuess = word.length * 2;
    correctLetters = []; incorrectLetters = [];
    hintTag.innertext = ranItem.hint;
    guessLeft.innertext = maxGuesses;
    wrongLetter.innertext = incorrectLetters;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += 'input type = "text" disabled>';
        inputs.innerHTML = html;
    }
}
randomWord();


