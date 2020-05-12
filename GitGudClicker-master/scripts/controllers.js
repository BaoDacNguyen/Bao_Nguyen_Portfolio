const getScore = function(){
    score = localStorage.getItem('score');
}

const useName = function(){
    playerName = localStorage.getItem('name');
}


const Controllers = function(){
    const name = document.getElementById('start-game');
    name.addEventListener('click', getName);
}

const getName = function(){
    const tempName = document.getElementById('player-name').value;
    localStorage.setItem('name',tempName);
}

const useName = function(){
    playerName = localStorage.getItem('name');
}


