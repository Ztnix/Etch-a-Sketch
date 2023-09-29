let numb = 64;
let colors =0;
let tiles=0;
let drawTheScreen = document.getElementById("draw")
let eraseTheScreen = document.getElementById("eraser")
let clearTheScreen = document.getElementById("clear")
let RGBTheScreen = document.getElementById("drawRGB")
let monoTheScreen = document.getElementById("drawRGB")

monoTheScreen.addEventListener("click",()=> colors=4);
drawTheScreen.addEventListener("click",()=> colors=2);
eraseTheScreen.addEventListener("click",()=> colors=1);
clearTheScreen.addEventListener("click",()=> clearScreen());
RGBTheScreen.addEventListener("click",()=> colors=3);

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.textContent = slider.value; 

slider.oninput = function() {
   output.textContent = this.value;
   tiles = this.value
}

let update = function(){
    tiles = slider.value
    grid.setAttribute('style', `grid-template-columns: repeat(${tiles}, 2fr); grid-template-rows: repeat(${tiles}, 2fr);`);
    removeAllChildNodes(grid);
    for (i=0; i<tiles; i++){
        for (j=0; j<tiles; j++){
            // console.log(`hey ${i},${j}`)
            const gridElement = document.createElement('div')
            gridElement.classList.add('gridElement')
            grid.appendChild(gridElement)
        }
    }


    document.querySelectorAll(".gridElement").forEach(item=>{
        item.addEventListener("mouseover",(e)=>{
            if (colors==1){
                eraseScreen(e.target)
            }else if (colors==2){
                drawScreen(e.target)
            }else if (colors ==3){
                RGBScreen(e.target)
            }else if (colors ==4){
                monoScreen(e.target)
            }
    
        })
    })
}

slider.addEventListener('input', update);
update();

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}





let colorGrid = function(target){
    target.style.backgroundColor = "red";
    
}

let clearScreen = function(){
    document.querySelectorAll(".gridElement").forEach(e=>{
        e.style.backgroundColor= "white";
})}

let eraseScreen = function(target){
    target.style.backgroundColor = "white";
}

let drawScreen = function(target){
    target.style.backgroundColor = "black";
}

let RGBScreen = function(target){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

let monoScreen = function(target){
    target.style.backgroundColor = "black";
}

