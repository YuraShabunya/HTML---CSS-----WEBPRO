function updateTame()
{
    time--;
    if(time > 0)
    {   
        gameProcces = true;
        const sec = Math.floor(time / 10);
        const msec = time % 10;
        document.getElementById('time').textContent = `${sec}.${msec}`;
    }
    else
    {
        gameProcces = false;
        gameField.removeChild(square);
        clearInterval(interval);
        changeTimeToResult();
        changeGameFieldForNoGame();
        document.getElementById('result').textContent = count;
    }
}