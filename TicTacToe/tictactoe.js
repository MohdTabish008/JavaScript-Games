//Restart Game Button
var restart = document.querySelector("#b");

//Grab All the Squares
var squares = document.querySelectorAll("td"); //will save all the squares as an array

//Clear All The Squares
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}
restart.addEventListener('click',clearBoard)
//Check the Square Marker

// For Loop to Add EventListeners To All Squares
function changeMarker() {
  if (this.textContent === "") {
    this.textContent = "X";
  }else if (this.textContent === "X") {
    this.textContent = "O";
  }else {
    this.textContent = "";
  }
}
//notice the use of "this" it basically points to the value it is associated with ,we can associate different attributes with it like here this.textcontent is associated at the same timr we could also have associated this.some other property& is usually defined by a function call
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMarker)
}

//now I am trying to add some modifications of my own into this project
//this will generate a random hex colour with he help of random library for all the tictactoe inputs
function getRandomColor() {
  var letters = "123456789ABCDEF";
  var color = "#";
  for (var i = 0; i<6 ; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

//now  function to change the header color with above genrated hex code
function changeHeaderColor() {
  colorInput = getRandomColor();
  for (var i = 0; i < squares.length; i++) {
  squares[i].style.color = colorInput;
  }
}

//setting intervals for change of colorInput in miliseconds
setInterval("changeHeaderColor()",300);


//now I am doing the same for the jumbotron
var header = document.querySelector(".jumbotron");
header.style.color = "gray"
//this will generate a random hex colour with he help of random library
function getArbitaryColor() {
  var letters = "123456789ABCdef";
  var color = "#";
  for (var i = 0; i<6 ; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

//now  function to change the header color with above genrated hex code
function changeJumbotronColor() {
  colorInput = getArbitaryColor();
  header.style.color = colorInput;
}

//setting intervals for change of colorInput in miliseconds
setInterval("changeJumbotronColor()",300);



//now the most important aspect of this is that while i have given jumbotron & squares different random colours so the name 
of random colour generating functions associated with both of them must be different.If I try to use same function to give color
to both of them random colors will be generated in only one of them.
