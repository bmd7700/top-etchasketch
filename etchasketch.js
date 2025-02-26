/**
 * 1. [ ] Create a 16x16 grid of square divs using Javascript. 
 *      They should nest into the container div in the HTML file. 
 * 2. [ ] Set up a Hover effect so that the grid divs change color when the mouse passes
 *      over them. 
 * 3. [ ] Set up a button that will generate a popup asking users to select a new grid size
 *      Once clicked, the program will replace the 16x16 grid with a grid of user-specified size.
 *      3a. [ ] Upper limit for user-generated grid is 100 x 100. 
 * 
 */ 

// const testAppend = document.createElement("p");
// testAppend.innerText = "I LIVE";
// container.appendChild(testAppend);
const container = document.getElementById("container");
const addDiv = document.createElement("div");
const userGrid = document.getElementById("userGrid");

//called by onClick from button id "userGrid"
function setUserGrid(){
    let gridSize = prompt('Enter a number between 1 and 100: ');
    if(gridSize > 0 && gridSize <101){
        for(let i = 0; i < gridSize; i++){
            appendDiv(container, "TEST");
        }
    } else {alert("That is not a number between 1 and 100, you lump!")}
}

function appendDiv(nodeName, text){
    newDiv = document.createElement("div");
    newDiv.innerText = text;
    nodeName.appendChild(newDiv);
}