




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



    function playRoundForUi(input) {
        const humanChoice = input;
        const computerChoice =getComputerChoice();

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
                return "human"
              
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


const results = document.getElementById("results");
const log = document.getElementById("log");
let scoreHuman = 0;
let scoreComputer = 0;
let round = 0;

function playGameForUi(input) {

 
    round+=1;
        console.log("----ROUND " + (round)+"----");
        
        let winner = playRoundForUi(input);
        
        if (winner=="human") {
            
            return 1;
            
        }else if (winner=="computer") {
            
            return 0;
        }
            
 

}


document.addEventListener("click", function(event){
    
  
   // if(log.length>0)log.removeChild(log.firstChild);
    let choice = event.target.tagName.toLowerCase()
    if(choice == "button" ){
        let game = playGameForUi(event.target.id);
        if(game==1){
            scoreHuman += 1;
           // let logPara = document.createElement("p");
            log.innerHTML = "You win! " + choice + " beats " + computerChoice + ".";
            //log.appendChild(logPara);
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
           // let logPara = document.createElement("p");
            log.innerHTML = "You Lose! " + choice + " does not beat " + computerChoice + ".";
            //log.appendChild(logPara);
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
    let textScore = scoreHuman+"-"+scoreComputer;
    results.innerHTML = textScore;
    
});

function winnerChek(human, computer){
    if (human==5){
        return 1;
    }else if(computer==5){
        return 0;
    }else{
        return "not yet";
    }
}


// playGame();
