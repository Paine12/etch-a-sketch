let container = document.querySelector(".container")

function createDivs(){
    for(i=1;i<=16;i++){
        for(j=1;j<=16;j++){
            let newdiv = document.createElement("div")
            newdiv.setAttribute("style", "width: 30px; height: 30px; display: inline-block; background-color: blue; margin:5px")
            container.appendChild(newdiv);
        }
    }
}

createDivs();