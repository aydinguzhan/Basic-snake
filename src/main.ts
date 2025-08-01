import "./style.css";
import Creator from "./creator";
import { draw } from "./game";
import Input from "./input";

const INPUT = new Input();
const app = document.getElementById("app");

window.onload = () => {
  const canvas = new Creator().createCanvas(document);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas context alınamadı.");

  if (app) app.appendChild(canvas);
  INPUT.setInput(document);

  function gameLoop() {
    const isAlive = draw(ctx as CanvasRenderingContext2D, INPUT);
    if (!isAlive) {
      return;
    }
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      INPUT.setInput(document);
    });
    requestAnimationFrame(() => setTimeout(gameLoop, 100));
  }

  gameLoop();
};
