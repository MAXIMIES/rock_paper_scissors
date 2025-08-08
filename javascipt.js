

const results = document.getElementById("results");
const log = document.getElementById("log");

let scoreHuman = 0;
let scoreComputer = 0;
let round = 0;

let textScore = scoreHuman+"-"+scoreComputer;
results.innerHTML = textScore;

let imgPlayer = document.getElementById("player-image");
let imgComputer = document.getElementById("computer-image");


function getComputerChoice() {
    
    let number = Math.floor(Math.random()*3);
    
        if(number==0){
            computerChoice="rock";
        }else if(number==1){
            computerChoice="paper";
        }else{
            computerChoice="scissors"
        }
       

    return computerChoice;
}


function getHumanChoice() {

    humanChoice=prompt("Choose one: rock, paper or scissor.").toLowerCase();
    humanChoice.trim();

    return humanChoice;
    
}

function imageSwapper(human, comp) {
    switch (human) {
        case "rock":
            imgPlayer.src = "./img/playerRock.png"
            break;
        case "paper":
            imgPlayer.src = "./img/playerPaper.png"
            break;
        case "scissors":
            imgPlayer.src = "./img/playerScissors.png"
            break;    
        default:
            break;
    }
    switch (comp) {
        case "rock":
            imgComputer.src = "./img/computerRock.png"
            break;
        case "paper":
            imgComputer.src = "./img/computerPaper.png"
            break;
        case "scissors":
            imgComputer.src = "./img/computerScissors.png"
            break;    
        default:
            break;
    }    

}

function bounce(bouncer) {
    if(bouncer == "human"){
        imgPlayer.classList.add("animation-win");
        imgPlayer.addEventListener("animationend", () =>{
            imgPlayer.classList.remove("animation-win");
            console.log(imgPlayer.classList);
        });

    }else if(bouncer == "computer") {
        console.log("---------------ARRIVED BOUNCE COMP");

        imgComputer.classList.add("animation-win");
        imgComputer.addEventListener("animationend", () =>{
            imgComputer.classList.remove("animation-win");
            console.log(imgComputer.classList);
        });
    
    }
}

function firstLetterToUpperCase(string){
    console.log("-----------"+string);
    let array = [];
    array = Array.from(string);
    array[0] = array[0].toUpperCase();
    console.log(array);
    let returnableString = ''; 
    array.forEach((letter) => returnableString += letter);
    console.log(returnableString);
    return returnableString;
}

    function playRoundForUi(input) {
        const humanChoice = input;
        const computerChoice =getComputerChoice();
        
        imageSwapper(humanChoice, computerChoice); 

        console.log("playRound recieved human value: " + humanChoice);
        console.log("playRound recieved computer value: " + computerChoice);

        if( humanChoice=="rock"||
            humanChoice=="paper"||
            humanChoice=="scissors"||
            humanChoice=="scissor"){

            if((( humanChoice=="rock")&&(computerChoice=="scissors"||
                  computerChoice=="scissor")) || 
                  ((humanChoice=="paper")&&(computerChoice=="rock")) || 
                  ((humanChoice=="scissor"||
                  humanChoice=="scissors")&&(computerChoice=="paper"))){
                    
                  return "human";
              
            }else if((( humanChoice=="scissors"||
                        humanChoice=="scissor")&&computerChoice=="rock") || 
                        (humanChoice=="rock"&&computerChoice=="paper") || 
                        (humanChoice=="paper"&&(computerChoice=="scissor" || computerChoice=="scissors"))){
                        
                        return "computer";
                                      
            }else{
                log.innerHTML = "It's a tie! You both chose " + humanChoice + ".";
            }
        }else{
            console.log("Incorret input. Reload page and try again.")

        }
                 

    }




function playGameForUi(input) {
 
    round+=1;
        console.log("----ROUND " + (round)+"----");
        
        let winner = playRoundForUi(input);
        
        if (winner=="human") {
            bounce(winner);
            return 1;
            
        }else if (winner=="computer") {
            bounce(winner);
            return 0;
        }
            
 

}

function winnerChek(human, computer){
    if (human==5){
        return 1;
    }else if(computer==5){
        return 0;
    }else{
        return "not yet";
    }
}

function playerClick(choice,event){
        let game = playGameForUi(event.target.id);
        if(game==1){
            scoreHuman += 1;

            log.innerHTML = "You win! " + firstLetterToUpperCase(choice) + " beats " + computerChoice + ".";
            
            /*           imgPlayer.classList.add("animation-win");
            imgPlayer.addEventListener("animationend", () =>{
                imgPlayer.classList.remove("animation-win");
                console.log(imgPlayer.classList);
            }); */
            
            
            switch (winnerChek(scoreHuman,scoreComputer)) {
                case 1:
                    log.innerHTML = "You win!"
                    scoreComputer = 0; 
                    scoreHuman = 0;
                    break;
                case 0:
                    log.innerHTML = "Computer wins!"       
                    scoreComputer = 0;
                    scoreHuman = 0;
                    break;  
                case "not yet":
                    
                    break;
            }  

        }else if(game==0){
            scoreComputer += 1;
            
            log.innerHTML = "You Lose! " + firstLetterToUpperCase(choice) + " does not beat " + computerChoice + ".";
            
            /*   imgComputer.classList.add("aniamtion-win");
            imgComputer.addEventListener("animationend", () =>{
                imgComputer.classList.remove("animation-win");
                console.log(imgComputer.classList);
            });  */

            switch (winnerChek(scoreHuman,scoreComputer)) {
                case 1:
                    log.innerHTML = "You win!"
                    scoreComputer = 0; 
                    scoreHuman = 0;
                    break;
                case 0:
                    log.innerHTML = "Computer wins!"       
                    scoreComputer = 0;
                    scoreHuman = 0;
                    break;  
                case "not yet":
                    
                    break;
            }  

        }
    }
document.addEventListener("click", function(event){

    let choice = event.target.tagName.toLowerCase()
    if(choice == "button" ){
        playerClick(event.target.id.toLowerCase(),event);
         
    }
    textScore = scoreHuman+"-"+scoreComputer;
    results.innerHTML = textScore;
   
});



document.addEventListener("mousedown", function(event){
     let choice = event.target.tagName.toLowerCase()
    if(choice == "button" ){
       event.target.className = "button-onclick";
    }
    

})

document.addEventListener("mouseup", function(event){
     let choice = event.target.tagName.toLowerCase()
    if(choice == "button" ){
       event.target.className = "button-style";
    }
    

})

// playGame();
