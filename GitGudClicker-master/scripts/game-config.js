var config = {
    type: Phaser.AUTO,
    parent: 'phaser-clicker',
    width: 800,
    height: 600,
    scale: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var info;
var timer;
var hit = 0;
var game = new Phaser.Game(config);

function preload (){
    this.load.image('bg', '../photos/sky4.png');
    this.load.image('dot', '../photos/red_ball.png');
}

function create (){
    var bg = this.add.image(400, 300, 'bg');
    var dot = this.add.image(400, 400, 'dot');
    dot.setInteractive();
    //makes boxes send a click event when clicked
    dot.on('clicked', clickHandler, this);
    this.input.on('gameobjectup', function (pointer, gameObject){
        gameObject.emit('clicked', gameObject); 
    }, this);

    //Display the game info
    info = this.add.text(10, 10, '', { font: '36px Arial', fill: '#000000' });
    
    timer = this.time.addEvent({ delay: 60000, callback: gameOver, callbackScope: this });
}

function update (){
    info.setText('Hit: ' + hit + '\nTime: ' + Math.floor(60000 - timer.getElapsed()));
}

function clickHandler (dot){
    hit++;
    dot.off('clicked', clickHandler);
    dot.input.enabled = false;
    dot.setVisible(false);
    x = Phaser.Math.Between(0, 800);
    y = Phaser.Math.Between(0, 600);
    dot = this.add.image(x, y, 'dot');
    dot.setInteractive();
    dot.on('clicked', clickHandler, this);
    this.input.on('gameobjectup', function (pointer, gameObject){
        gameObject.emit('clicked', gameObject);
    }, this);
    
}

function gameOver (){
    localStorage.setItem('score',hit);
    this.input.off('gameobjectup');
}
