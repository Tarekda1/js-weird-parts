//Snake
// --enqueue for snake body (array)
// --move()  - take in a direction and manipulate queue
// --draw()  - draw the grid with snake body
class Snake {
  constructor() {
    this.snakeBody = [
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4],
    ];
  }

  draw() {
    const grid = [];
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(" ");
      }
      grid.push(row);
    }

    this.snakeBody.forEach((pos) => {
      const [row, col] = pos;
      grid[row][col] = "0";
    });

    grid.forEach((row) => console.log(row.join("|")));
  }

  move(direction) {
    const delta = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1],
    };
    const currentHead = this.snakeBody[this.snakeBody.length - 1];
    const [currRow, currCol] = currentHead;
    const [changeRow, changeCol] = delta[direction];
    const newHead = [currRow + changeRow, currCol + changeCol];
    this.snakeBody.push(newHead); //add element to the last element in array
    this.snakeBody.shift(); //remove 1st element in array
  }
  play() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume(true);
    stdin.setEncoding("utf8");
    stdin.on("data", (keypress) => {
      if (keypress === "w") {
        this.move("up");
      } else if (keypress === "d") {
        this.move("right");
      } else if (keypress === "a") {
        this.move("left");
      } else if (keypress === "x") {
        this.move("down");
      }
      if (keypress === "\u0003") process.exit();
      this.draw();
    });
  }
}

const game = new Snake();
game.play();

//for (let n = 100; n > 0; n--) {
// game.move("up");
// game.draw();
// game.move("right");
// game.draw();
// game.move("right");
// game.draw();
// game.move("right");
// game.draw();
// game.move("down");
// game.draw();
// game.move("left");
// game.draw();
// game.move("down");
// game.draw();
//}
