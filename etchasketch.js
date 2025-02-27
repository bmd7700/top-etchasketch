/**
 * 1. [X] Create a 16x16 grid of square divs using Javascript. 
 *      They should nest into the container div in the HTML file. 
 * 2. [ ] Set up a Hover effect so that the grid divs change color when the mouse passes
 *      over them. 
 * 3. [X] Set up a button that will generate a popup asking users to select a new grid size
 *      [ ] NEED TO CHANGE MATHS FOR THIS - make branch when solving this problem Note: this should set number of squares PER SIDE of the grid. 
 *      Once clicked, the program will replace the 16x16 grid with a grid of user-specified size.
 *      3a. [X] Upper limit for user-generated grid is 100 x 100. 
 * 
 */ 

const container = document.getElementById("container");
const addDiv = document.createElement("div");
const userGrid = document.getElementById("userGrid");
for(i = 0; i<16; i++){
    appendDiv("style1");
    console.log('appending');
}

//called by onClick from button id "userGrid"
function setUserGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
        console.log('removing');
    }

    let gridSize = prompt('Enter a number between 1 and 100: ');
    const gridFactor = 960 / Math.floor(Math.sqrt(gridSize));
    console.log("grid factor: " + gridFactor.toString() + "px");

    if(gridSize > 0 && gridSize <101){
        for(let i = 0; i < gridSize; i++){
            appendDiv("userStyle");
            console.log('appending');
        };
        modifyRules(gridFactor);
    } else {
        alert("That is not a number between 1 and 100, you lump!")
    }
}

function appendDiv(className){
    container.appendChild(document.createElement("div")).className = className.toString();
    console.log('appendDiv className: ' + className);
}

function modifyRules(gridFactor){
    const styleSheet = document.styleSheets[0];
    let elementRule;
    let size = gridFactor.toString() + 'px';
    console.log('size: ' + size);
    for(let i = 0; i < styleSheet.cssRules.length; i++){
        if(styleSheet.cssRules[i].selectorText === '.userStyle'){
            elementRule = styleSheet.cssRules[i];
            elementRule.style.setProperty("height", size);
            elementRule.style.setProperty("width", size);
            console.log(styleSheet)
        }
    }
}
