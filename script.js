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

        if(gameResult=='P'){
            timesWon += 1;
            console.log('you won!')
        }
        else if(gameResult=='C'){
            timesLost += 1;
            console.log('you lost!')
        }

        else {
            console.log('you tied!')
        }

        
    }
    if(timesWon>timesLost){
        console.log('after five rounds, you won ' + timesWon + '! you win.')
    }
    else if(timesWon<timesLost){
        console.log('after five rounds, you lost ' + timesLost + '! you lose.')
    }
    else{
        console.log('after five rounds, you won as much as you lost!' + '! you tie.')
    }
}
game()