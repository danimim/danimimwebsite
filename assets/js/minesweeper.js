/**
 * Minesweeper — a Windows 95 style game in a window on the main desktop.
 * Self-contained: finds #minesweeper-content on DOMContentLoaded and
 * builds the game there. No dependency on app.js or data.js.
 */

console.log('Loading minesweeper.js...');

class Minesweeper {
    constructor(container, rows, cols, mineCount) {
        this.container = container;
        this.rows = rows;
        this.cols = cols;
        this.mineCount = mineCount;
        this.board = [];
        this.gameOver = false;
        this.firstClick = true;
        this.elapsed = 0;
        this.timerInterval = null;
        this.flagsPlaced = 0;
        this.render();
        this.newGame();
    }

    render() {
        this.container.innerHTML = `
            <div class="ms-game">
                <div class="ms-header">
                    <div class="ms-counter" id="ms-mines">000</div>
                    <button class="ms-face" id="ms-face" aria-label="New game" type="button">🙂</button>
                    <div class="ms-counter" id="ms-time">000</div>
                </div>
                <div class="ms-board" id="ms-board"></div>
            </div>
        `;
        this.faceEl = this.container.querySelector('#ms-face');
        this.minesEl = this.container.querySelector('#ms-mines');
        this.timeEl = this.container.querySelector('#ms-time');
        this.boardEl = this.container.querySelector('#ms-board');
        this.faceEl.addEventListener('click', () => this.newGame());
    }

    newGame() {
        this.board = [];
        this.gameOver = false;
        this.firstClick = true;
        this.elapsed = 0;
        this.flagsPlaced = 0;
        this.stopTimer();
        for (let r = 0; r < this.rows; r++) {
            const row = [];
            for (let c = 0; c < this.cols; c++) {
                row.push({ mine: false, revealed: false, flagged: false, adjacent: 0 });
            }
            this.board.push(row);
        }
        this.faceEl.textContent = '🙂';
        this.renderBoard();
        this.updateMineCounter();
        this.updateTimer();
    }

    placeMines(safeR, safeC) {
        const safeCells = new Set();
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                safeCells.add((safeR + dr) + ',' + (safeC + dc));
            }
        }
        let placed = 0;
        while (placed < this.mineCount) {
            const r = Math.floor(Math.random() * this.rows);
            const c = Math.floor(Math.random() * this.cols);
            if (this.board[r][c].mine) continue;
            if (safeCells.has(r + ',' + c)) continue;
            this.board[r][c].mine = true;
            placed++;
        }
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (this.board[r][c].mine) continue;
                let count = 0;
                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        const nr = r + dr, nc = c + dc;
                        if (nr < 0 || nr >= this.rows || nc < 0 || nc >= this.cols) continue;
                        if (this.board[nr][nc].mine) count++;
                    }
                }
                this.board[r][c].adjacent = count;
            }
        }
    }

    renderBoard() {
        this.boardEl.innerHTML = '';
        this.boardEl.style.gridTemplateColumns = `repeat(${this.cols}, 22px)`;
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const cell = document.createElement('button');
                cell.className = 'ms-cell';
                cell.dataset.r = r;
                cell.dataset.c = c;
                cell.type = 'button';
                cell.addEventListener('click', () => this.handleClick(r, c));
                cell.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    this.handleRightClick(r, c);
                });
                this.boardEl.appendChild(cell);
            }
        }
    }

    cellEl(r, c) {
        return this.boardEl.querySelector(`[data-r="${r}"][data-c="${c}"]`);
    }

    updateCell(r, c) {
        const el = this.cellEl(r, c);
        if (!el) return;
        const data = this.board[r][c];
        el.className = 'ms-cell';
        el.textContent = '';
        if (data.revealed) {
            el.classList.add('ms-revealed');
            if (data.mine) {
                el.classList.add('ms-mine');
                el.textContent = '💣';
            } else if (data.adjacent > 0) {
                el.classList.add('ms-n' + data.adjacent);
                el.textContent = data.adjacent;
            }
        } else if (data.flagged) {
            el.classList.add('ms-flagged');
            el.textContent = '🚩';
        }
    }

    renderAll() {
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) this.updateCell(r, c);
        }
    }

    handleClick(r, c) {
        if (this.gameOver) return;
        const data = this.board[r][c];
        if (data.revealed || data.flagged) return;
        if (this.firstClick) {
            this.placeMines(r, c);
            this.firstClick = false;
            this.startTimer();
        }
        if (data.mine) {
            this.loseGame(r, c);
            return;
        }
        this.revealCell(r, c);
        this.checkWin();
    }

    handleRightClick(r, c) {
        if (this.gameOver) return;
        const data = this.board[r][c];
        if (data.revealed) return;
        data.flagged = !data.flagged;
        this.flagsPlaced += data.flagged ? 1 : -1;
        this.updateCell(r, c);
        this.updateMineCounter();
    }

    revealCell(r, c) {
        const data = this.board[r][c];
        if (data.revealed || data.flagged) return;
        data.revealed = true;
        this.updateCell(r, c);
        if (data.adjacent === 0 && !data.mine) {
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    if (dr === 0 && dc === 0) continue;
                    const nr = r + dr, nc = c + dc;
                    if (nr < 0 || nr >= this.rows || nc < 0 || nc >= this.cols) continue;
                    this.revealCell(nr, nc);
                }
            }
        }
    }

    loseGame(hitR, hitC) {
        this.gameOver = true;
        this.stopTimer();
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const d = this.board[r][c];
                if (d.mine) d.revealed = true;
            }
        }
        this.renderAll();
        const hit = this.cellEl(hitR, hitC);
        if (hit) hit.classList.add('ms-mine-hit');
        this.faceEl.textContent = '😵';
    }

    winGame() {
        this.gameOver = true;
        this.stopTimer();
        this.faceEl.textContent = '😎';
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const d = this.board[r][c];
                if (d.mine && !d.flagged) {
                    d.flagged = true;
                    this.flagsPlaced++;
                    this.updateCell(r, c);
                }
            }
        }
        this.updateMineCounter();
    }

    checkWin() {
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const d = this.board[r][c];
                if (!d.mine && !d.revealed) return;
            }
        }
        this.winGame();
    }

    startTimer() {
        if (this.timerInterval) return;
        const startedAt = Date.now();
        this.timerInterval = setInterval(() => {
            this.elapsed = Math.min(999, Math.floor((Date.now() - startedAt) / 1000));
            this.updateTimer();
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    updateTimer() {
        this.timeEl.textContent = String(this.elapsed).padStart(3, '0');
    }

    updateMineCounter() {
        const remaining = this.mineCount - this.flagsPlaced;
        if (remaining < 0) {
            this.minesEl.textContent = '-' + String(Math.min(99, -remaining)).padStart(2, '0');
        } else {
            this.minesEl.textContent = String(Math.min(999, remaining)).padStart(3, '0');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('minesweeper-content');
    if (container) new Minesweeper(container, 9, 9, 10);
});

console.log('✅ minesweeper.js loaded!');
