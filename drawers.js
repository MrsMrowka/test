function drawers() {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let boardWidth = canvas.width = 500;
    let boardHeight = canvas.height = 800;
    let objectSize = boardHeight / 15;
    let half = objectSize / 2;

    function clearBoard() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function drawPlayer(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, half / 2, 0, 2 * Math.PI);
        ctx.fillStyle = "purple";
        ctx.fill();
        ctx.closePath();
    }

    function drawHole(x, y, ready) {
        ctx.beginPath();
        ctx.arc(x, y, half, 0, 2 * Math.PI);
        ctx.fillStyle = ready ? "gold" : "red";
        ctx.fill();
        ctx.closePath();
    }

    function drawWall(x, y) {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillRect(x, y, 50, 50);
        ctx.fill();
        ctx.closePath();
    }

    function drawKey(x, y) {
        let image = document.getElementById("key");
        ctx.drawImage(image, x - half, y - half, objectSize, objectSize);
    }

    function canMoveX(x) {
        return x >= half / 2 && x <= boardWidth - half / 2;
    }
    function canMoveY(y) {
        return y >= half / 2 && y <= boardHeight - half / 2;
    }

    function isOverlapping(obj1, obj2) {
        return (
            Math.abs(obj1.x - obj2.x) < objectSize / 2 &&
            Math.abs(obj1.y - obj2.y) < objectSize / 2
        );
    }

    return {
        boardWidth,
        boardHeight,
        objectSize,
        half,
        clearBoard,
        drawPlayer,
        drawHole,
        drawWall,
        drawKey,
        canMoveX,
        canMoveY,
        isOverlapping
    };
}