// tworzenie platform
function createplat(posX, posY, widthSize, heightSize){
    platforms.push(
        {
        x: posX,
        y: posY,
        width: widthSize,
        height: heightSize
        });
}
// tworzenie monet
function createCoin(posX, posY){
    coins.push(
        {
        x: posX,
        y: posY,
        width: 14,
        height: 16 
        });
}

// tworzenie spikes
function createSpikes(posX, posY, widthSize, heightSize){
    spikes.push(
        {
            x: posX,
            y: posY,
            width: widthSize,
            height: heightSize
        }
    );
}

