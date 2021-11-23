// idle animation values
let idleRowsNum = 0;
let idleColumnsNum = 10;    
let idleRow = 0;
let idleColumn = 0;
let playerIdle = new Image;
playerIdle.src = 'assets/sprites/player-idle.png';

// idle left animation values
let playerIdleLeft = new Image;
playerIdleLeft.src = 'assets/sprites/player-idle-left.png';

// running animation values
let runRowsNum = 0;
let runColumnsNum = 6;
let runRow = 0;
let runColumn = 0;
let playerRun = new Image;
playerRun.src = 'assets/sprites/player-run.png'; 

// run left animation values
let playerRunLeft = new Image;
playerRunLeft.src = 'assets/sprites/player-run-left.png';

// jump animation values
let playerJump = new Image;
playerJump.src = 'assets/sprites/player-jump.png';

// coin animation values
let coinFlip = new Image;
coinFlip.src= 'assets/sprites/coin-flip.png';

// platform animation values
let platformJungle = new Image;
platformJungle.src = 'assets/sprites/jungle.png';

// spikes animation values
let platformSpikes = new Image;
platformSpikes.src = 'assets/sprites/spikes.png';

// animate Idle function
function animIdle(){
    player.width = 19;
    ctx.imageSmoothingEnbaled = false;
    ctx.drawImage(playerIdle, idleColumn * player.width, idleRow * player.height, player.width, player.height, player.x - player.width, player.y - player.height, player.width, player.height);
    
    if(idleColumn <= idleColumnsNum){
        idleColumn++;
    }else if(idleColumn >= idleColumnsNum){
        idleColumn = 0;
    }
}

// animate Idle left function
function animIdleLeft(){
    player.width = 19;
    ctx.imageSmoothingEnbaled = false;
    ctx.drawImage(playerIdleLeft, idleColumn * player.width, idleRow * player.height, player.width, player.height, player.x - player.width, player.y - player.height, player.width, player.height);
    
    if(idleColumn <= idleColumnsNum){
        idleColumn++;
    }else if(idleColumn >= idleColumnsNum){
        idleColumn = 0;
    }
}

// animate running function
function animRun(){
    player.width = 23;
    ctx.imageSmoothingEnbaled = false;
    ctx.drawImage(playerRun, runColumn * player.width, runRow * player.height, player.width, player.height, player.x - player.width, player.y - player.height, player.width, player.height);
    
    if(runColumn <= runColumnsNum){
        runColumn++;
    }else if(runColumn >= runColumnsNum){
        runColumn = 0;
    }
}
// animate running left function
function animRunLeft(){
    player.width = 23;
    ctx.imageSmoothingEnbaled = false;
    ctx.drawImage(playerRunLeft, runColumn * player.width, runRow * player.height, player.width, player.height, player.x - player.width, player.y - player.height, player.width, player.height);
    
    if(runColumn <= runColumnsNum){
        runColumn++;
    }else if(runColumn >= runColumnsNum){
        runColumn = 0;
    }
}

// animate jumping function
function animJump(){
    player.width = 17;
    ctx.imageSmoothingEnbaled = false;
    ctx.drawImage(playerJump, player.x - player.width, player.y - player.height);
}

// animate coin flip funciton
function animCoin(i){
    ctx.imageSmoothingEnbaled = false;
    ctx.drawImage(coinFlip, coins[i].x - 3, coins[i].y - 3);
}

// animate platforms
function animPlatforms(i){
    ctx.imageSmoothingEnbaled = false;
    ctx.drawImage(platformJungle, platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
}

// animate spikes
function animSpikes(i){
    ctx.imageSmoothingEnbaled = false;
    ctx.drawImage(platformSpikes, spikes[i].x, spikes[i].y, spikes[i].width, spikes[i].height);
}