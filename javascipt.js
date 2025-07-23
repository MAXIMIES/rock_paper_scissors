console.log("Hello World!");

let humanChoice;
let computerChoice;
let humanScore;
let computerScore;

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
        console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice() {

    return humanChoice;
}

function playRound(humanChoice,computerChoice) {


}

function playGame() {


}

console.log("The computer chose " + getComputerChoice());
