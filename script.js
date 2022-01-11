let rps = ['rock','paper','scissors']

function computerPlay(){
    return(rps[Math.floor(Math.random()*rps.length)]);
}

function playRound(playerSelection, computerSelection){
    if(playerSelection=='rock'){
        if(computerSelection=='scissors'){
            return 'P';
        }
        else if (computerSelection=='paper'){
            return 'C';
        }
        else{
            return 'T';
        }
    }
    if(playerSelection=='paper'){
        if(computerSelection=='rock'){
            return 'P';
        }
        else if (computerSelection=='scissors'){
            return 'C';
        }
        else{
            return 'T';
        }
    }
    if(playerSelection=='scissors'){
        if(computerSelection=='paper'){
            return 'P';
        }
        else if (computerSelection=='rock'){
            return 'C';
        }
        else{
            return 'T';
        }
    }
    
}

function game(){

    let timesWon = 0;
    let ties = 0;
    let timesLost = 0;


    for (let i = 0; i < 5; i++){
        
        let playerInput = prompt('Rock, paper, scissors!');
        playerInput = playerInput.toLowerCase();
        
        let gameResult = playRound(playerInput, computerPlay());

        

    }
}
game()