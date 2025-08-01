export default class Creator {
  createCanvas(document: Document): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    const size = 600; // veya istersen `innerWidth` ve `innerHeight` dinamik

    canvas.width = size;
    canvas.height = size;

    canvas.style.width = `${size}px`; // Görünen boyutla gerçek boyutu eşleştir
    canvas.style.height = `${size}px`;

    return canvas;
  }

  updateScore(score: number): void {
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
      scoreElement.textContent = score.toString();
    }
  }
  showGameOverModal(score: number) {
    const modal = document.getElementById("game-over-modal")!;
    const modalScore = document.getElementById("modal-score")!;
    const restartBtn = document.getElementById("restart-btn")!;

    modalScore.textContent = score.toString();
    modal.classList.remove("hidden");

    restartBtn.onclick = () => {
      location.reload(); // Oyunu yeniden başlat
    };
  }
}
