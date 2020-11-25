var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var form, game, player;



function setup(){
    database = firebase.database();

    canvas = createCanvas(400,400);
   game = new Game();
   game.getState();
   game.start();

}

function draw(){
    
   
}



// .ref() - refer to teh location
// .on() - reda the va;ues/ listen to the values
// .set() =  chnage the values/ write to the datavnase