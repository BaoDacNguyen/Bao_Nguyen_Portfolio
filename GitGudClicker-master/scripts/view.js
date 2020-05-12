const gameMenu = function(){
    const view = document.getElementById('view');
    const html =    `<section>
                        Challenger Name: <input id='player-name' type=text placeholder='Insert Name'>
                        <button type="button" class="btn btn-dark" id='new-game'> Start New Game</button>
                    </section>`
    view.innerHTML = html;
    addController('new-game');
}

const newGameScreen = function(){
    playerName = document.getElementById('player-name').value;
    const view = document.getElementById('view');
    const html =    `<section>
                        <a class="btn btn-dark" id='start-game' href="game.html">Start the Challenge</a>
                    </section>`
    view.innerHTML = html;
}



