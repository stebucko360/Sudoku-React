export const gameBoardCreator = (x, y) => {
    const addBorderX = x + 4;
    const addBorderY = y + 4;
    const gameGrid = []
    while (gameGrid.length < addBorderX) {
        gameGrid.push([])
    }
    if (gameGrid.length === addBorderX) {
        for (let i = 0; i < gameGrid.length; i++) {
            if(i === 0 || i === addBorderX - 1 || i % 4 === 0) {
                while (gameGrid[i].length < addBorderY) {
                    gameGrid[i].push('border')
                }
            } else {
                while (gameGrid[i].length < addBorderY) {
                    if (gameGrid[i].length === 0 || gameGrid[i].length === addBorderX - 1 || gameGrid[i].length % 4 === 0) {
                        gameGrid[i].push('border')
                    } else {
                        gameGrid[i].push(0)
                    }
                }
            }
        }
    }
    return gameGrid;
}

