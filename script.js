let rps = ['rock','paper','scissors']

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

const dubs = document.getElementById('dubs')
const ls = document.getElementById('ls')
const ties = document.getElementById('ties')


rock.addEventListener('click', () => {
    playRound('rock', computerPlay())
})
paper.addEventListener('click', () => {
    playRound('paper', computerPlay())
})
scissors.addEventListener('click', () => {
    playRound('scissors', computerPlay())
})

function add(thing, string){
    thing.textContent = (parseInt(thing.textContent) + 1) + ' ' + string
}



function computerPlay(){
    return(rps[Math.floor(Math.random()*rps.length)]);
}

function playRound(playerSelection, computerSelection){
    if(playerSelection=='rock'){
        if(computerSelection=='scissors'){
           add(dubs,'dubs')
        }
        else if (computerSelection=='paper'){
            add(ls, 'Ls')
        }
        else{
            add(ties, 'ties')
        }
    }
    if(playerSelection=='paper'){
        if(computerSelection=='rock'){
            add(dubs,'dubs')
        }
        else if (computerSelection=='scissors'){
            add(ls, 'Ls')
        }
        else{
            add(ties, 'ties')
        }
    }
    if(playerSelection=='scissors'){
        if(computerSelection=='paper'){
            add(dubs,'dubs')
        }
        else if (computerSelection=='rock'){
            add(ls, 'Ls')
        }
        else{
            add(ties, 'ties')
        }
    }

    if (parseInt(dubs.textContent) == 5){
        alert('You won!')
        reset()
        
    }
    
    else if (parseInt(ls.textContent) == 5){
        alert('You lost!')
        reset()
    }
    
    
}

function reset(){
    dubs.textContent = '0 dubs'
    ls.textContent = '0 Ls'
    ties.textContent = '0 ties'
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