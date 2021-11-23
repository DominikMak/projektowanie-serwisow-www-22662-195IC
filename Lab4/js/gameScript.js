
function loop() {
    // if player is not jumping add friction effect
    if(player.jump == false) {
        player.x_v *= friction;
    } else {
        // if player is currently jumping add gravity force
        player.y_v += gravity;
    }
    player.jump = true;

    // if left key is pressed change velocity
    if(keys.left) {
        player.x_v = -2.5;
    }
    if(keys.right) {
        player.x_v = 2.5;
    }

    // Update the position of player 
    if(player.y - player.height <= 0)
    {
        player.y = player.height + 2;
    }else
    {
        player.y += player.y_v;
    }
    if(player.x >= 800){
        player.x = 800 - 2;
    }else if(player.x - player.width <= 0){
        player.x = player.width + 2;
    }else{
        player.x += player.x_v;
    }

    // check for collision with platform
    for(let i = 0; i < platforms.length; i++)
    {
        if(platforms[i].x < player.x  && player.x - player.width < platforms[i].x + platforms[i].width &&
            platforms[i].y < player.y && player.y < platforms[i].y + platforms[i].height){
                player.jump = false;
                player.y = platforms[i].y;  
        }
    }

    // check for collision with coin
    for(let k = 0; k < coins.length; k++)
    {
        if(coins[k].x < player.x  && player.x < coins[k].x + coins[k].width &&
            coins[k].y < player.y && player.y < coins[k].y + coins[k].height){
                score++;
               coins[k] = [];
        }
    }

    for(let i = 0; i < spikes.length; i++)
    {
        if(spikes[i].x < player.x  && player.x - player.width < spikes[i].x + spikes[i].width &&
            spikes[i].y < player.y && player.y < spikes[i].y + spikes[i].height){
                player.x = spikes[0].x - 30;
                life--;
        }
    }
    
    // render elements
    rendercanvas();
    renderplayer(currentState);
    renderplat();
    renderCoins();
    renderScore();
    renderLife();
    renderSpikes();
    
    if(life <= 0){
        renderLost();
        clearInterval(startInter);
    }

    if(score >= maxScore){
        renderWin();
        clearInterval(startInter);
    }
}

function startGame(x) {
    document.getElementById('main').style.display = 'none';
    canvas=document.getElementById("canvas");
    ctx=canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.canvas.height = 600;
    ctx.canvas.width = 800;
    level(x);
    if(lvlExist){
        // event listeners
        document.addEventListener("keydown",keydown);
        document.addEventListener("keyup",keyup);
        document.addEventListener("keydown",escape);
        startInter = setInterval(loop, 22);
    }else {
        ctx.font = '30px serif';
        ctx.fillStyle = "red";
        ctx.fillText('LEVEL DOES NOT EXIST', 300, 400);
    }
}

function endGame(){

    player = {
        x: 20,
        y: 400,
        x_v: 0,
        y_v: 0,
        jump : true,
        height: 34,
        width: 19
        };

    score = 0;

    keys = {
        right: false,
        left: false,
        up: false,
        };

    gravity = 0.6;
    friction = 0.7;

    platforms = [];

    coins = [];

    lvlExist = true;

    currentState = 1;

    startInter;

    spikesCreatingHelper = 0;

    life = 3;

    spikes = [];

    maxScore;
}
