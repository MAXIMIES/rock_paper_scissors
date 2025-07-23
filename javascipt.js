

let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    
    let number = Math.floor(Math.random()*3);
    console.log(number);
        if(number==0){
            computerChoice="rock";
        }else if(number==1){
            computerChoice="paper";
        }else{
            computerChoice="scissors"
        }
        console.log("Computer choice function: "+computerChoice);

    return computerChoice;
}


function getHumanChoice() {

    humanChoice=prompt("Choose one: rock, paper or scissor.").toLowerCase();
    humanChoice.trim();
    console.log("Human choice function: " + humanChoice);
    return humanChoice;
    
}

function playRound(human,computer) {
    humanChoice=human;
    computerChoice=computer;

    console.log("playRound recieved human value: " + humanChoice);
    console.log("playRound recieved computer value: " + computerChoice);

    if(humanChoice=="rock"||humanChoice=="paper"||humanChoice=="scissors"||humanChoice=="scissor"){
        if(((humanChoice=="rock")&&(computerChoice=="scissors"||computerChoice=="scissor")) || ((humanChoice=="paper")&&(computerChoice=="rock")) || ((humanChoice=="scissor"||humanChoice=="scissors")&&(computerChoice=="paper"))){
            humanScore++;
            console.log("Score: Human " + humanScore + " - Computer " + computerScore);
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
        }else if(((humanChoice=="scissors"||humanChoice=="scissor")&&computerChoice=="rock") || (humanChoice=="rock"&&computerChoice=="paper") || (humanChoice=="paper"&&(computerChoice=="scissor"||computerChoice=="scissors"))){
            computerScore++;
            console.log("Score: Human " + humanScore + " - Computer " + computerScore);
            console.log("You Lose! " + humanChoice + " does not beat " + computerChoice + ".");
        }else{
            console.log("It's a tie! You both chose " + humanChoice + ".");
         }
     }else{
        console.log("Incorret input. Reload page and try again.")
    }
}

function playGame() {


}


playRound(getHumanChoice(),getComputerChoice());
