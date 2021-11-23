let maxScore;

let spikesCreatingHelper = 0;
  
  // player variables
 let player = {
    x: 20,
    y: 400,
    x_v: 0,
    y_v: 0,
    jump : true,
    height: 34,
    width: 19
    };

let score = 0;
let life = 3;

// keys status
let keys = {
    right: false,
    left: false,
    up: false,
    };

// gravity and friction variable
let gravity = 0.6;
let friction = 0.7;

// platform variable
let platforms = [];

// coins variable
let coins = [];

// spikes variable
let spikes = [];

// check if level exists
let lvlExist = true;

// current animation state
let currentState = 1;

// this variable hold interval (used to stop game from running)
let startInter;