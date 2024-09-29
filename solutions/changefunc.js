function changeTimeToResult()
{
    timer.classList.add('hide');
    result.classList.remove('hide');      
}

function changeResultToTime()
{        
    timer.classList.remove('hide');
    result.classList.add('hide');
}

function changeGameFieldForGame()
{
    gameField.style.backgroundColor = 'white';
    button.classList.add('hide');
}
    
function changeGameFieldForNoGame()
{
    gameField.style.backgroundColor = '#ccc';
    button.classList.remove('hide');
}
