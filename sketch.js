//variáveis necessárias para o projeto
var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

//declarar variáveis para grupos de moedas e combustíveis
var coing, fuelg

//declarar variáveis para imagem de moeda e combustível
var coinimg, fuelimg


//função de carregamento de imagens 
function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  coinimg = loadImage("../assets/goldCoin.png");
  fuelimg = loadImage("../assets/fuel.png");
  //carregar as imagens em suas respectivas variáveis (moeda e combustível)


}

//função de configuração de objetos 
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //iniciando o banco de dados
  database = firebase.database();


  //criando o objeto
  game = new Game();
  //chamando métodos da classe game,  através do objeto game
  game.getState();
  game.start();
}

//função de repetição
function draw() {
  background(backgroundImage);

  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
