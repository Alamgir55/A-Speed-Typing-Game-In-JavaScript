window.addEventListener('load', init);

const levels = {
    easy: 5,
    medium: 3,
    hard: 2
};

const currentLevel = levels.hard; 

let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDispaly = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

function init(){
    seconds.innerHTML = currentLevel;
    showWord(words);

    setInterval(countDown, 1000);
    setInterval(checkStatus, 50);
    wordInput.addEventListener('input', startMatch);
}

function startMatch(){
    if(matchWord()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if(score === -1){
        scoreDispaly.innerHTML = 0;
    }else{
        scoreDispaly.innerHTML = score;
    }
}

function matchWord(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!!';
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}

function showWord(words){
    const ramdomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[ramdomIndex];
}

function countDown(){
    if(time > 0){
        time--;
    }else if(time === 0){
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = "Game Over";
        score = -1;
    }
}