console.log('Tic-Tac-Tones');
var $gameboard = $('.gameboard');

var player1Value = [];
var player2Value = [];
var activePlayer = true;
var winner = '';
var turnCount = 0;
var $gameStatus = $('.gameStatus');
var winCondition =  [
                    ['1','2','3'],
                    ['1','4','7'],
                    ['1','5','9'],
                    ['2','5','8'],
                    ['3','6','9'],
                    ['4','5','6'],
                    ['7','8','9'],
                    ['3','5','7']
                  ];
//var activeWinCondition = winCondition[i]

var game = [
  '1', '2', '3',
  '4', '5', '6',
  '7', '8', '9'
];

$('.gameboard').on('click', function(event) {
  if (activePlayer ===  true) {
    activePlayer = false
  } else {
    activePlayer = true;
  }
  if (player1Value.includes(event.target.getAttribute('data-cell'))) {
    activePlayer = true;
  } else if (activePlayer === false) {
      player1Value.push(event.target.getAttribute('data-cell'));
      $(event.target).addClass('player1Img')
      turnCount++;
  } if (player2Value.includes(event.target.getAttribute('data-cell'))) {
    activePlayer = false;
  }  else if (activePlayer === true) {
    player2Value.push(event.target.getAttribute('data-cell'))
    $(event.target).addClass('player2Img')
    turnCount++;
  } for (var i = 0; i < winCondition.length; i++) {
      regEx = new RegExp('[' + (winCondition[i].join('') + ']'), 'g')
      if (player1Value.sort().join('').match(regEx)) {
        if (player1Value.sort().join('').match(regEx).join('') === (winCondition[i].join(''))) {
          winner = 'DJ Player 1 in the house!';
          $gameStatus.text('D.J. Player 1 in the house!');
        }
      }
      if (player2Value.sort().join('').match(regEx)) {
        if (player2Value.sort().join('').match(regEx).join('') === (winCondition[i].join(''))) {
          winner = 'D.J. Player 2 in the house!';
          $gameStatus.text('DJ Player 2 in the house!');
        }
      }
     if ((turnCount === 9) && (winner === '')) {
      winner = 'DRAW';
      $gameStatus.text('DRAW');
      turnCount = 0;
    }
  }
});


// winCombo
// "[159]"
// regEx = new RegExp(winCombo, 'g')
// /[159]/g
// string.match(regEx)
// ["1", "5", "9"]
console.log('Tic-Tac-Tones');
var $gameboard = $('.gameboard');

var player1Value = [];
var player2Value = [];
var activePlayer = true;
var winner = '';
var turnCount = 0;

var winCondition =  [
                    ['1','2','3'],
                    ['1','4','7'],
                    ['1','5','9'],
                    ['2','5','8'],
                    ['3','6','9'],
                    ['4','5','6'],
                    ['7','8','9'],
                    ['3','5','7']
                  ];

var game = [
  '1', '2', '3',
  '4', '5', '6',
  '7', '8', '9'
];

$('.gameboard').on('click', function(event) {
  if (winner !== '') {
    return
  }
  if (activePlayer ===  true) {
    activePlayer = false
  } else {
    activePlayer = true;
  }
  if (player1Value.includes(event.target.getAttribute('data-cell'))) {
    activePlayer = true;
  } else if (activePlayer === false) {
      player1Value.push(event.target.getAttribute('data-cell'));
      $(event.target).addClass('player1Img')
      turnCount++;
  } if (player2Value.includes(event.target.getAttribute('data-cell'))) {
    activePlayer = false;
  }  else if (activePlayer === true) {
    player2Value.push(event.target.getAttribute('data-cell'))
    $(event.target).addClass('player2Img')
    turnCount++;
  } for (var i = 0; i < winCondition.length; i++) {
    if (player1Value.sort().join().includes(winCondition[i].join())) {
    winner = 'DJ Player 1 in the house!';}
    if (player2Value.sort().join().includes(winCondition[i].join())) {
    winner = 'DJ Player 2 in the house!';
    }
    else if (turnCount === 9) {
      winner = 'DRAW'
      turnCount = 0;
    }
  }
});
