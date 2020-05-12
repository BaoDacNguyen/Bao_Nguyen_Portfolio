const gameMenu = function(){
    const view = document.getElementById('view');
    const html =    `<section class=''>
                        <h1 class='text-center'>GitGudClicker</h1>
                        <div class='text-center pt-5'>    
                            Challenger Name: <input id='player-name' type=text placeholder='Insert Name'>
                            <a class="btn btn-dark" id='start-game' href="game.html">Start the Challenge</a>
                        </div>
                    </section>`
    view.innerHTML = html;
    Controllers();
}



