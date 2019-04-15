var ballen = [];

function setup() {
  // maak vier verschillende bal-objecten en stop
  // deze in de array 'ballen'
  ballen.push(new Ball(300, 200, 4, 4));
  ballen.push(new Ball(150, 30, 7, 2));
  ballen.push(new Ball(275, 400, 2, 6));
  ballen.push(new Ball(20, 150, 3, 5));
  

  createCanvas(800, 450); // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  background("blue"); // Kleur de achtergrond blauw, zodat je het kunt zien
  console.log(ballen);
  console.log("setup klaar"); // berichtje voor debuggen
}

function draw() {
  background("black");

  for (var i = 0; i < ballen.length; i++) {
    ballen[i].update();
    ballen[i].display();
  }
}
  
