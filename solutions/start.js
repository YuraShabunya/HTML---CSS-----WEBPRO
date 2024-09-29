document.getElementById('start').onclick = () =>
{
    time = document.getElementById('game-time').value * 10;
    count = 0;
    changeResultToTime();
    changeGameFieldForGame();
    createSquare();
    interval = setInterval(updateTame, 100);
}

document.getElementById('game-time').addEventListener('input', () => 
    {
    document.getElementById('time').textContent = `${document.getElementById('game-time').value}.0`;
    changeResultToTime();
    });

square.addEventListener('click', () => 
    {
    gameField.removeChild(square);
    count++;
    if(gameProcces)
        createSquare();
    });
  
document.onmousemove = (e) => {
    document.onclick = () =>{
    circle.classList.add('click');
    circle.style.left = e.pageX - 5 + 'px';
    circle.style.top = e.pageY - 5 + 'px';
    document.body.appendChild(circle);
    
    setTimeout(() => {
        circle.remove();
        }, 500);
    }
}    