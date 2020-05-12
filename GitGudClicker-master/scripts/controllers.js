const getScore = function(){
    score = localStorage.getItem('score');
}

const getCallbacks = function(){
    const callbacks = {};
    callbacks['home-menu'] = gameMenu;
    callbacks['new-game'] = newGameScreen;
    return callbacks;
}

const addController = function(...buttonIDs){
    const callbacks = getCallbacks();
    for (let id of buttonIDs){
        const button = document.getElementById(id);
        button.addEventListener('click', callbacks[id]);
    }
}




