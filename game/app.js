/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore,activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;//setting this up as 0 so that we can access scores array easly



//document.querySelector('#current-'+activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>'; // if we want to set html

//var x = document.querySelector('#score-'+activePlayer).textContent;
//console.log(x);

var diceDOM = document.querySelector('.dice');
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

diceDOM.style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click',function(){
    // 1. Random number
    var dice = Math.floor((Math.random() * 6 )) + 1;

    // 2. Display the result
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';

    //3. Update the round score IF the rolled number was NOT a 1
    if(dice !== 1){
        //add score
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    }else{
    //next player
    
        scores[activePlayer] += roundScore;

        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

        document.getElementById('current-'+activePlayer).textContent = '0';
        
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');


        roundScore = 0;
        

        
        
    }
}); 