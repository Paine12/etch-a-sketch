let container = document.querySelector(".container")
let button = document.querySelector(".clear")


var mouseDown = 0;
document.body.onmousedown = function() { 
  mouseDown=1;
}
document.body.onmouseup = function() {
  mouseDown=0;
}

function createDivs(){
    for(i=1;i<=16;i++){
        for(j=1;j<=16;j++){
            let newdiv = document.createElement("div")
            newdiv.setAttribute("style", "background-color: white;")

            newdiv.addEventListener("mouseover", () => {
                if(mouseDown){
                    newdiv.setAttribute("style", "background-color: black;")
                }
                
            })
            container.appendChild(newdiv);
            
        }
    }
}

function deleteDivs(){
    let children = container.children;
    children.forEach(child => {
        container.removeChild(child);
    });
}

createDivs();

button.addEventListener("click", () => {
    deleteDivs;
    createDivs;
})