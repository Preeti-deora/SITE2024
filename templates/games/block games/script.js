// Set up the canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set up the game variables
const WIDTH = 800;
const HEIGHT = 600;
const gridSize = 50;

// Function to draw the grid
function drawGrid() {
    ctx.fillStyle = '#fff'; // Background color
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    ctx.strokeStyle = '#000'; // Grid line color
    for (let x = 0; x <= WIDTH; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, HEIGHT);
        ctx.stroke();
    }
    for (let y = 0; y <= HEIGHT; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(WIDTH, y);
        ctx.stroke();
    }
}

// Main function
function main() {
    drawGrid();
}

// Call the main function
main();
