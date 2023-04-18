// Get game element and define choices
const game = document.getElementById('game');
const choices = [
  {
    option: 'Search for food.',
    result: 'You found some berries! They sustain you for another day.',
    result2: 'You found a beehive and got stung multiple times! Your hunger persists.',
    result3: 'You stumbled upon a snake! You were able to kill and eat it.'
  },
  {
    option: 'Drink water from a nearby stream.',
    result: 'The water was contaminated! You feel sick and weak.',
    result2: 'The water was refreshing! But you accidentally swallow a bug.',
    result3: 'You find a fresh water source! You feel hydrated and a little less hungry.'
  },
  {
    option: 'Rest and conserve energy.',
    result: 'You feel slightly better rested, but your hunger is still intense.',
    result2: 'You overslept and wasted precious daylight. Your hunger persists.',
    result3: 'You managed to find a safe spot to rest and avoid predators. You feel a little more relaxed.'
  },
  {
    option: 'Try to hunt for food.',
    result: 'You managed to catch a rabbit! It\'s not much, but it helps.',
    result2: 'You chased after a deer, but it got away. You feel more tired and hungry.',
    result3: 'You hunted a squirrel, but it wasn\'t enough to satisfy your hunger.'
  },
  {
    option: 'Scavenge for edible plants.',
    result: 'You found a few nuts and fruits! They help stave off hunger for a little longer.',
    result2: 'You accidentally ate a poisonous mushroom! You feel sick and weak.',
    result3: 'You found a berry bush, but it was already picked clean by other animals.'
  }
];

// Define game variables
let daysSurvived = 0;
let gameOver = false;

// Start the game and show choices
function startGame() {
  game.innerHTML = '<p>You are lost in the wilderness without any food. How will you survive?</p>';
  showChoices();
}

// Show the available choices as buttons
function showChoices() {
  let options = '';
  for (let i = 0; i < choices.length; i++) {
    options += `<button onclick="makeChoice(${i})">${choices[i].option}</button>`;
  }
  game.innerHTML += options;
}

// Process the player's choice and update game state
function makeChoice(index) {
  game.innerHTML = `<p>${choices[index].result}</p>`;
  if (index === 1) {
    game.innerHTML += '<p>You lost the game. Game over.</p>';
    gameOver = true;
  } else {
    daysSurvived++;
    game.innerHTML += `<p>Days survived: ${daysSurvived}</p>`;
  }
  if (!gameOver) {
    setTimeout(showChoices, 2000);
  }
}

// Shuffle the choices array and start the game
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffle(choices);
startGame();
