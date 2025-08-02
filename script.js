let scorestr = localStorage.getItem('Score');
let score;
resetScore();

function resetScore(scorestr){
    score = score ? JSON.parse(scorestr) : {
        win:0,
        lost:0,
        tie:0,
    };
    score.displayscore= function(){
        return `Won: ${score.win}, Lost:${score.lost}, Tie: ${score.tie}`;
    };
    showResult();
}

function batclick(){
    let computerChoice = generateComputerChoice();
    let resultMsg = getResult('🏏',computerChoice);
    showResult('🏏', computerChoice, resultMsg);
}
function ballclick(){
    computerChoice = generateComputerChoice();
    resultMsg = getResult('⚽',computerChoice);
    showResult('⚽', computerChoice, resultMsg);
}
function stumpclick(){
    computerChoice = generateComputerChoice();
    resultMsg = getResult('🟫',computerChoice);
    showResult('🟫', computerChoice, resultMsg);
}

function generateComputerChoice(){
    let randomNumber = Math.random() * 3;
    if(randomNumber > 0 && randomNumber <=1){
        return '🏏';
    }else if (randomNumber >1 && randomNumber <= 2){
        return '⚽';
    }else{
        return '🟫';
    }
}

function getResult(userMove, computerMove){
    if(userMove ==='🏏'){
        if(computerMove === '⚽'){
            score.win++;
            return 'User Won🤴🏻';
        }else if(computerMove ==='🏏'){
            score.tie++;
            return `It's a tie👻`;
        }else if(computerMove === '🟫'){
            score.lost++;
            return `Computer has Won👑`;
        }
    }else if(userMove ==='⚽'){
        if(computerMove === '⚽'){
            score.tie++;
            return `It's a tie👻`;
        }else if(computerMove ==='🏏'){
            score.lost++;
            return `Computer has Won👑`;
        }else if(computerMove === '🟫'){
            score.win++;
            return 'User Won🤴🏻';
        }
    }else{
        if(computerMove === '⚽'){
            score.lost++;
            return`Computer has Won👑`;
        }else if(computerMove ==='🏏'){
            score.win++;
            return 'User Won🤴🏻';
        }else if(computerMove === '🟫'){
            score.tie++;
            return  `It's a tie👻`;
        }
    }
}

function showResult(userMove, computerMove, result){
    localStorage.setItem('Score', JSON.stringify(score));
    document.querySelector('#user-move').innerText = userMove == undefined ? '' : `You have chosen ${userMove}`;
    document.querySelector('#computer-move').innerText = computerMove !== undefined ? `Computer Choice is ${computerMove}` : ''; 
    document.querySelector('#result').innerText = result !== undefined ? `${result}` : '';
    document.querySelector('#score').innerText = `${score.displayscore()}`;
}