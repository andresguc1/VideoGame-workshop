document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('load', setCanvasSize);
    window.addEventListener('resize', setCanvasSize);

    // Buttons
    const btnUp = document.querySelector('#up');
    const btnLeft = document.querySelector('#left');
    const btnRight = document.querySelector('#right');
    const btnDown = document.querySelector('#down');

    // Canvas
    const canvas = document.querySelector('#game');
    const game = canvas.getContext('2d');
    let canvasSize;
    let elementsSize;

    // Player
    const playerPosition = {
        x: undefined,
        y: undefined,
    };

    function setCanvasSize() {
        if (window.innerHeight > window.innerWidth) {
            canvasSize = window.innerWidth * 0.8;
        } else {
            canvasSize = window.innerHeight * 0.8;
        }

        canvas.setAttribute('width', canvasSize);
        canvas.setAttribute('height', canvasSize);

        elementsSize = canvasSize / 10;

        startGame();
    }

    function startGame() {
        game.font = elementsSize + 'px Verdana';
        game.textAlign = 'end';

        const map = maps[0];
        const mapRows = map.trim().split('\n');
        const mapRowCols = mapRows.map(row => row.trim().split(''));

        mapRowCols.forEach((row, rowI) => {
            row.forEach((col, colI) => {
                const emoji = emojis[col];
                const posX = elementsSize * (colI + 1);
                const posY = elementsSize * (rowI + 1);

                if (col == 'O') {
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    console.log({ playerPosition });
                }
                game.fillText(emoji, posX, posY);
            });
        });

        movePlayer();
    }

    function movePlayer() {
        game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
    }

    function moveByKeys(event) {
        if (event.key == 'ArrowUp') moveUp();
        else if (event.key == 'ArrowLeft') moveLeft();
        else if (event.key == 'ArrowRight') moveRight();
        else if (event.key == 'ArrowDown') moveDown();
    }

    function moveUp() {
        playerPosition.y -= elementsSize;
        movePlayer();
    }

    function moveLeft() {
        playerPosition.x -= elementsSize;
        movePlayer();
    }

    function moveRight() {
        playerPosition.x += elementsSize;
        movePlayer();
    }

    function moveDown() {
        playerPosition.y += elementsSize;
        movePlayer();
    }

    window.addEventListener('keydown', moveByKeys);
    btnUp.addEventListener('click', moveUp);
    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
    btnDown.addEventListener('click', moveDown);

    setCanvasSize();
});
