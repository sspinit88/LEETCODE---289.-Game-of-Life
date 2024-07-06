/*
289. Game of Life

According to Wikipedia's article: "The Game of Life, also known simply as Life, 
is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). 
Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

    Any live cell with fewer than two live neighbors dies as if caused by under-population.
    Any live cell with two or three live neighbors lives on to the next generation.
    Any live cell with more than three live neighbors dies, as if by over-population.
    Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. 
Given the current state of the m x n grid board, return the next state.

Example 1:

Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

Example 2:

Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]

*/

/*
Ваша задача - вернуть следующее состояние игрового поля "Игра жизни" Джона Конвея, применив четыре правила к каждой ячейке текущего состояния.

Вот шаги, которые мы будем следовать:

1. Создайте копию исходного поля, чтобы сохранить текущее состояние всех ячеек.
2. Пройдите по каждой ячейке на доске.
3. Для каждой ячейки подсчитайте количество живых соседей.
4. Примените четыре правила к каждой ячейке на основе количества ее живых соседей.

Your task is to return the next state of John Conway's Game of Life board by applying the four rules to each cell of the current state.

Here are the steps we will follow:

1. Create a copy of the original board to keep the current state of all cells.
2. Go through each cell on the board.
3. For each cell, count the number of live neighbors.
4. Apply the four rules to each cell based on the number of its live neighbors.

*/

function gameOfLife(board) {
  // Создаем копию исходного поля
  // Create a copy of the original board
  let original = JSON.parse(JSON.stringify(board));

  // Проходим по каждой ячейке на доске
  // Go through each cell on the board
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // Подсчитываем количество живых соседей
      // Count the number of live neighbors
      let liveNeighbors = 0;
      for (
        let x = Math.max(i - 1, 0);
        x <= Math.min(i + 1, board.length - 1);
        x++
      ) {
        for (
          let y = Math.max(j - 1, 0);
          y <= Math.min(j + 1, board[0].length - 1);
          y++
        ) {
          liveNeighbors += original[x][y] ? 1 : 0;
        }
      }
      liveNeighbors -= original[i][j] ? 1 : 0;

      // Применяем четыре правила к каждой ячейке на основе количества ее живых соседей
      // Apply the four rules to each cell based on the number of its live neighbors
      if (original[i][j] && (liveNeighbors < 2 || liveNeighbors > 3)) {
        board[i][j] = 0;
      }
      if (!original[i][j] && liveNeighbors === 3) {
        board[i][j] = 1;
      }
    }
  }
}
