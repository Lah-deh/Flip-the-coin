let click = document.querySelector("button");
click.addEventListener("click",()=>{
    flipCoin()
})

function flipCoin(){
    let result = Math.random() < 0.5 ?"heads" : "tails";
    
    
    if(result == "heads"){
        document.querySelector(".show").innerHTML = "Heads";
        document.getElementById("coin").src = "./images/heads.svg";

    }else if(result == "tails"){
        document.querySelector(".show").innerHTML = "Tails";
        document.getElementById("coin").src = "./images/tails.svg";
    }


}