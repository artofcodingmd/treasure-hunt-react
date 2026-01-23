
var treasureLocation = Math.floor(Math.random() * 9);
console.log(treasureLocation);
do {
  bombLocation = Math.floor(Math.random() * 9);
}while (bombLocation===treasureLocation);

console.log(bombLocation);
var counter = 9;

function checkPosition(id) {

  if (counter>0) {
    counter = counter - 1;
    document.getElementById("counter").innerHTML = counter;

    if (treasureLocation === id){
      document.getElementById(id).innerHTML = '<img rel="preload" src="images/treasure100.png"/>';

    } else if (bombLocation === id){

      document.getElementById(id).innerHTML = '<img rel="preload" src="images/bomb100.png"/>';

    } else {
      document.getElementById(id).innerHTML = '<img rel="preload" src="images/ladybug100.png"/>';
    }

    if (treasureLocation === id){

      document.getElementById("clicks").innerHTML = "";
      document.getElementById("counter").innerHTML = "You Win!";
      document.getElementById("again").innerHTML = "Play Again&#8634;";

      counter = 0;
    } else if (bombLocation === id){

          document.getElementById("clicks").innerHTML = "";
          document.getElementById("counter").innerHTML = "You Lose!";
          document.getElementById("again").innerHTML = "Play Again&#8634;";
          counter=0;
    }
  }
}
