const container= document.querySelector(".container");
const setSquares = document.querySelector(".numbr-squares");

if (container) {
  console.log("file found page loaded ");

}


setSquares.addEventListener("click", () => {
  let userChoice = prompt("enter your choice number of squares over 100");
  while (userChoice < 100 || userChoice ===null || !userChoice ===Number) {
    userChoice = prompt("enter number only and it must be over 100");
    console.log(userChoice);
  }

let square = userChoice;
console.log(square);


container.textContent = "";

  
for(let i =1; i < square; i++){
  const squareDivs = document.createElement('div');
  squareDivs.classList.add("flex-square");
  squareDivs.addEventListener("mouseenter",function() {squareDivs.style.cssText  = "background:rgb(118, 65, 172); border:2px solid yellow;  "
})

squareDivs.addEventListener("mouseleave", () => 
squareDivs.style.cssText = "background: lightgrey; border: 1px solid rgb(207, 39, 39);")
  container.appendChild(squareDivs);

  // console.log(`square ${i + 1} added to container`);
}
})