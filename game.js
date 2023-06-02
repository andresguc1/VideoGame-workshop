document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('load', setCanvasSize);
    window.addEventListener('resize', setCanvasSize);

    const canvas = document.querySelector('#game');

    let canvasSize;
    let elementsSize;

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
        const canvas = document.querySelector('#game');
        const game = canvas.getContext('2d');

        game.font = elementsSize + 'px Verdana';
        game.textAlign = 'end';


        const map = maps[0];
        const mapRows = map.trim().split('\n');
        const mapRowCols = mapRows.map(row => row.trim().split(''));
        // console.log({ map, mapRows, mapRowCols });

        mapRowCols.forEach((row, rowI) => {
            row.forEach((col, colI) => {
                const emoji = emojis[col];
                const posX = elementsSize * (colI + 1);
                const posY = elementsSize * (rowI + 1);;

                game.fillText(emoji, posX, posY)
                console.log({row, rowI, col, colI});
            });
        });
    }
});
