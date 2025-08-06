




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

function playRound() {
        const humanChoice = getHumanChoice();
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
                console.log("It's a tie! You both chose " + humanChoice + ".");
            }
        }else{
            console.log("Incorret input. Reload page and try again.")

        }
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
                console.log("It's a tie! You both chose " + humanChoice + ".");
            }
        }else{
            console.log("Incorret input. Reload page and try again.")

        }
    }

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let index = 0; index <= 4; index++) {
        console.log("----ROUND " + (index+1)+"----");
        
        let winner = playRound();
        
        if (winner=="human") {
            humanScore++
            console.log("Score: Human " + humanScore + " - Computer " + computerScore);
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
            
            
        }else if (winner=="computer") {
            computerScore++
            console.log("Score: Human " + humanScore + " - Computer " + computerScore);
            console.log("You Lose! " + humanChoice + " does not beat " + computerChoice + ".");
            
        }
            
    }
    if (humanScore>computerScore) {
        console.log("You Win the Game!");
        
    }else if (computerScore>humanScore) {
        console.log("Computer Wins the Game!");
    }else{
        console.log("It's A Tie! " + humanScore + " " + computerScore);
    }

}

const results = document.getElementById("results");
console.log(results);
let testNumber=12;

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
    let choice = event.target.tagName.toLowerCase()
    if(choice == "button" ){
        let game = playGameForUi(event.target.id);
        if(game==1){
            scoreHuman += 1;
            console.log("Score: Human " + scoreHuman + " - Computer " + scoreComputer);
            console.log("You win! " + choice + " beats " + computerChoice + ".");
            
        }else if(game==0){
            scoreComputer += 1;
            console.log("Score: Human " + scoreHuman + " - Computer " + scoreComputer);
            console.log("You Lose! " + choice + " does not beat " + computerChoice + ".");
            

        }
         
    }
    let textScore = scoreHuman+"-"+scoreComputer;
    results.innerHTML = textScore;
    
});


// playGame();
