var randomNumber = Math.floor(Math.random() * 99) + 1;
            console.log(randomNumber);
            var guesses = document.querySelector('#guesses');
            var lastResult = document.querySelector('#lastResult');
            var lowOrHi = document.querySelector('#lowOrHi');
            
            var guessSubmit = document.querySelector('.guessSubmit');
            var guessField = document.querySelector('.guessField');
            
            var Won = 0;
            var Loss = 0;
            var guessCount = 1;
            var resetButton;
            guessField.focus();
            var resetButton = document.querySelector('#reset');
            resetButton.style.display = 'none';
            
            var resetButton;
            
            function checkGuess(){
                var userGuess = Number(guessField.value);
                if(guessCount === 1){
                    guesses.innerHTML = 'Previous Guesses: ';
                }
                guesses.innerHTML += userGuess + ' ';
                
                    if(userGuess === randomNumber){
                        lastResult.innerHTML = 'Congratulations! You got it right!';
                        lastResult.style.backgroundColor = 'green';
                        lowOrHi.innerHTML = '';
                        Won++;
                        setGameOver();
                    } else if (guessCount === 7){
                        lastResult.innerHTML = 'Sorry, you lost!';
                        Loss++;
                        setGameOver();
                    } else {
                        lastResult.innerHTML = 'Wrong!';
                        lastResult.style.backgroundColor = 'red';
                        lastResult.style.color = 'white';
                    
                    
                    if(userGuess > 99){
                        alert("Guess is above 99 Try Again");
                        guessCount++;
                    } else if(userGuess < randomNumber){
                        lowOrHi.innerHTML = 'Last guess was too low!';
                        lowOrHi.style.backgroundColor = 'red';
                        lowOrHi.style.color = 'white';
                    } else if (userGuess > randomNumber){
                        lowOrHi.innerHTML = 'Last guess was too high!';
                        lowOrHi.style.backgroundColor = 'red';
                        lowOrHi.style.color = 'white';
                        }
                    
                    }
                    
                    guessCount++;
                    guessField.value = '';
                    guessField.focus();
            }
            
            guessSubmit.addEventListener('click', checkGuess);
            
            function setGameOver(){
                guessField.disabled = true;
                guessSubmit.disables = true;
                resetButton.style.display = 'inline';
                resetButton.addEventListener('click', resetGame);
            }
            
            function resetGame(){
                guessCount = 1;
                
                var resetParas = document.querySelectorAll('.resultParas p');
                for(var i = 0; i < resetParas.length; i++){
                    resetParas[i].textContent = '';
                }
                
                resetButton.style.display = 'none';
                
                guessField.disabled = false;
                guessSubmit.disabled = false;
                guessField.value = '';
                guessField.focus();
                
                lastResult.style.backgroundColor = 'white';
                
                randomNumber = Math.floor(Math.random() * 99) + 1;
            }