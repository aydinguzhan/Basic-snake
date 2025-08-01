import type { Position } from "./types";
import Input from "./input";
import Creator from "./creator";

const boxSize = 20;
const canvasSize = 600;

let snake: Position[] = [{ x: 200, y: 200 }];
let food: Position = randomFood();
let score = 0;
const creator = new Creator();

export function draw(ctx: CanvasRenderingContext2D, input: Input): boolean {
  const { dx, dy } = input.getDirection();
  const head: Position = {
    x: snake[0].x + dx,
    y: snake[0].y + dy,
  };

  // Çarpışma kontrolü
  if (
    head.x < 0 ||
    head.x >= canvasSize ||
    head.y < 0 ||
    head.y >= canvasSize ||
    snake.some((segment) => segment.x === head.x && segment.y === head.y)
  ) {
    creator.showGameOverModal(score);
    return false; // oyun bitti
  }

  // Yeni kafa
  snake.unshift(head);

  // Yiyecek yediyse
  if (head.x === food.x && head.y === food.y) {
    score++;
    creator.updateScore(score);
    food = randomFood();
  } else {
    snake.pop();
  }

  // Temizle
  ctx.clearRect(0, 0, canvasSize, canvasSize);

  // Yiyecek
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, boxSize, boxSize);

  // Yılan
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "lime" : "green";
    ctx.fillRect(snake[i].x, snake[i].y, boxSize, boxSize);
  }

  return true;
}

function randomFood(): Position {
  let x: number = 20;
  let y: number = 20;
  let valid = false;

  while (!valid) {
    x = Math.floor(Math.random() * (canvasSize / boxSize)) * boxSize;
    y = Math.floor(Math.random() * (canvasSize / boxSize)) * boxSize;
    valid = !snake.some((segment) => segment.x === x && segment.y === y);
  }

  return { x, y };
}
