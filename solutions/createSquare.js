function createSquare()
{
    square.style.position = 'absolute';
    square.style.top = `${Math.random() * (gameField.clientHeight - 60)}px`;
    square.style.left = `${Math.random() * (gameField.clientWidth - 60)}px`;
    square.style.height = `${Math.random() * 20 + 30}px`;
    square.style.width = `${Math.random() * 20 + 30}px`;
    square.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    gameField.appendChild(square);
}