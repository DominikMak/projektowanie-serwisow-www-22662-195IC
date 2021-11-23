// funkcja czytająca przycisk
function keydown(e) {
    // 37 - lewa strzałka, 65 - 'A'
    if(e.keyCode == 37 || e.keyCode == 65) {
        currentState = 6;
        keys.left = true;
    }
    // 37 - górna strzałka, 87 - 'W'
    if(e.keyCode == 38 || e.keyCode == 87) {
        currentState = 3;
        if(player.jump == false) {
            player.y_v = -10;
        }
    }
    // 39 - prawa strzałka, 68 - 'D'
    if(e.keyCode == 39 || e.keyCode == 68) {
        currentState = 2;
        keys.right = true;
    }
    if(e.keyCode == 27){
        document.getElementById('main').style.display = 'block';
        endGame();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}
// funkcje kiedy przycisk został puszczony
function keyup(e) {
    if(e.keyCode == 37 || e.keyCode == 65) {
        currentState = 7;
        keys.left = false;
    }
    if(e.keyCode == 38 || e.keyCode == 87) {
        if(player.y_v < -2) {
        player.y_v = -3;
        }
    }
    if(e.keyCode == 39 || e.keyCode == 68) {
        currentState = 1;
        keys.right = false;
    }
} 
