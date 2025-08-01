import type { Directon } from "./types";

export default class Input {
  private dx = 20;
  private dy = 0;
  constructor() {}

  public getDirection(): Directon {
    return { dx: this.dx, dy: this.dy };
  }

  public setInput(document: Document): void {
    const down: string[] = ["s", "S", "ArrowDown"];
    const up: string[] = ["w", "W", "ArrowUp"];
    const right: string[] = ["d", "D", "ArrowRight"];
    const left: string[] = ["a", "A", "ArrowLeft"];

    document.addEventListener("keydown", (e: KeyboardEvent) => {
      const key = e.key;

      if (up.includes(key) && this.dy === 0) {
        this.dx = 0;
        this.dy = -20;
      } else if (down.includes(key) && this.dy === 0) {
        this.dx = 0;
        this.dy = 20;
      } else if (left.includes(key) && this.dx === 0) {
        this.dx = -20;
        this.dy = 0;
      } else if (right.includes(key) && this.dx === 0) {
        this.dx = 20;
        this.dy = 0;
      }
    });
  }
}
