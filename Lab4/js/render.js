// renderowanie canvas
function rendercanvas(){
    let bgk = new Image;
    bgk.src = 'assets/sprites/back-1.png';
    let pattern = ctx.createPattern(bgk, 'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 800, 600);
}

// wyświetlanie wyniku
function renderScore(){
    ctx.font = '20px Oswald';
    ctx.fillStyle = "white";
    ctx.fillText('Score: ' + score, 20, 25);
}

// wyświetlanie życia
function renderLife(){
    ctx.font = "20px Oswald";
    ctx.fillStyle = "white";
    ctx.fillText('LIFE: ' + life, 730, 25);
}

// wyświetlanie komunikatu o wygranej
function renderWin(){
    ctx.fillStyle = "rgba(39, 241, 8, 0.1)"
    ctx.fillRect(0, 0, 800, 600);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 275, 800, 95);

    ctx.font = '20px Oswald';
    ctx.textAlign = 'center';
    ctx.fillStyle = "white";

    ctx.fillText("WYGRAŁEŚ!", 400, 300);
    ctx.fillText("TWÓJ WYNIK: " + score, 400, 330);
    ctx.fillText("NACIŚNIJ ESC ABY WRÓCIĆ DO MENU", 400, 360);
}

// wyświetlanie komunikatu o przegranej
function renderLost(){
    ctx.fillStyle = "rgba(247, 2, 2, 0.3)"
    ctx.fillRect(0, 0, 800, 600);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 275, 800, 95);

    ctx.font = "20px Oswald";
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';

    ctx.fillText("PRZEGRAŁEŚ!...", 400, 310);
    ctx.fillText("NACIŚNIJ ESC ABY WRÓCIĆ DO MENU", 400, 340);
}

// renderowanie gracza
function renderplayer(currentState){
    switch(currentState){
        case 1:
            animIdle();
            break;
        case 2:
            animRun();
            break;
        case 3:
            animJump();
            break;
        case 4:
            animLand();
            break;
        case 5:
            animAir();
            break;
        case 6:
            animRunLeft();
            break;
        case 7:
            animIdleLeft();
            break;
        default:
            animIdle();
            break;
    }
}

// renderowanie platform
function renderplat(){
    for(let i = 0; i < platforms.length; i++)
    {
        animPlatforms(i);
    }
}

// renderowanie monet
function renderCoins(){
    for(let i = 0; i < coins.length; i++)
    {
        animCoin(i);
    }
}

// renderowanie spikes
function renderSpikes(){
    for(let i = 0; i < spikes.length; i++)
    {
        animSpikes(i);
    }
}