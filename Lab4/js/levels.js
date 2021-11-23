function level(x) {
    switch(x){
        case 1:
            maxScore = 1;
            createplat(0, 550, 800, 50);
            createplat(300, 450, 100, 20);
            createplat(480, 400, 50, 20);
            createCoin(600, 350);

            // creating row of spikes
            for(let i = 0; i < 50; i++){
                spikesCreatingHelper = i * 20;
                createSpikes(350 + spikesCreatingHelper, 535, 20, 20);
            }
            break;
        case 2:
            maxScore = 3;
            createplat(0, 550, 800, 50);
            createplat(300, 450, 100, 20);
            createplat(480, 400, 100, 20);
            createplat(225, 350, 180, 20);

            for(let i = 0; i < 10; i++){
                spikesCreatingHelper = i * 20;
                createSpikes(300 + spikesCreatingHelper, 535, 20, 20);
            }
            createSpikes(480, 380, 20, 20);

            createCoin(320, 410);
            createCoin(500, 360);
            createCoin(700, 500);
            break;
        case 3:
            maxScore = 2;
            createplat(0, 550, 800, 50);
            createplat(480, 450, 100, 20);
            createplat(300, 400, 120, 20);
            createplat(100, 390, 150, 20);

            createSpikes(100, 535, 20, 20);
            createSpikes(230, 370, 20, 20);
            createSpikes(175, 370, 20, 20);
            createSpikes(100, 370, 20, 20);

            createCoin(210, 370);
            createCoin(130, 370);
            break;
        default:
            console.log("poziom niedostępny");
            lvlExist = false;
    }
}