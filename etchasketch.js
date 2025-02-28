/**
 * Instructions for this exercise available at: https://www.theodinproject.com/lessons/foundations-etch-a-sketch
 */ 

const container = document.getElementById("container");
const addDiv = document.createElement("div");
const styleSheet = document.styleSheets[0];
const userGrid = document.getElementById("userGrid");
for(i = 0; i<16; i++){
    appendDiv("style1"); 
}
hoverColor();

//called by onClick from button id "userGrid"
function setUserGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
        console.log('removing');
    }

    let gridSize = prompt('Enter a number between 1 and 100: ');
    //const gridFactor = 960 / Math.floor(Math.sqrt(gridSize));
    const gridFactor = 960 / gridSize;
    console.log("grid factor: " + gridFactor.toString() + "px");

    if(gridSize > 0 && gridSize <101){
        for(let i = 0; i < gridSize ** 2; i++){
            appendDiv("userStyle");
        };
        modifyRules(gridFactor);
        hoverColor();
    } else {
        alert("That is not a number between 1 and 100, you lump!")
    }
}

function appendDiv(className){
    container.appendChild(document.createElement("div")).className = className.toString();
}

function modifyRules(gridFactor){
    let elementRule;
    let size = gridFactor.toString() + 'px';
    console.log('size: ' + size);
    for(let i = 0; i < styleSheet.cssRules.length; i++){
        if(styleSheet.cssRules[i].selectorText === '.userStyle'){
            elementRule = styleSheet.cssRules[i];
            elementRule.style.setProperty("height", size);
            elementRule.style.setProperty("width", size);
            console.log(styleSheet);
        }
    }

}


function hoverColor(){
    let cells = container.children;
    for(let i = 0; i < cells.length; i++){
        let cell;
        cell = cells[i];
        let rgb = rgbRandomizer();
        cell.addEventListener('mouseenter', ()=>{cell.style.backgroundColor = rgbRandomizer();});
    }
}

function rgbRandomizer(){
    let result;
    let r = randomNum(255).toString();
    let g = randomNum(255).toString();
    let b = randomNum(255).toString();
    result = `rgb(${r}, ${g}, ${b})`;
    console.log('RGB Randomizer: ' + result);
    return result;
}

function randomNum(num){
    return Math.floor(Math.random() * num);
}