
const PLAYERS = {
	'1': 'X',
	'-1': 'O',
	'null': ''

};

let xWins = 0;    //BN line9-10 keep tracks of the numbers of wins for player x and o. 
let oWins = 0;

const COMBOS = [ //BN check for winning combination
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];


let board, turn, winner; 



const messageEl = document.querySelector('h2');
const buttonEl = document.querySelector('button');
const boardEl = document.getElementById('board');
const squareEls = document.querySelectorAll('#board > div');



boardEl.addEventListener('click', handleClick);
buttonEl.addEventListener('click', init);



init();

//BN set the board to start filling all the array with null values. 

function init() {
	board = [null, null, null, null, null, null, null, null, null];
	// OR initialize like this:
	// board = new Array(9).fill(null);
	turn = 1;
	winner = null; // null is indiacates that no winner yet
	render();
}


//BN A for loop function that iterates over the COMBOS array in ln12 to check the winning combination. 
//BN the if statement checks whether the board value equal to 3 if the condition is met then it return the wining combination.
//BN if it does not then return as a tie in ln105


function checkWinner() {
	for (let i = 0; i < COMBOS.length; i++) {
		if (Math.abs(board[COMBOS[i][0]] +
			board[COMBOS[i][1]] +
			board[COMBOS[i][2]]) === 3) {
			return board[COMBOS[i][0]];
		}
	}
	if (board.includes(null)) return false;

	//   prompt('T')
	return 'T';
}


function render() {
	renderBoard();
	renderControl()

}

function handleClick(event) {
	const position = event.target.dataset.index;
	if (board[position] || winner) return; // exit the function's execution
	board[position] = turn;
	turn *= -1;
	winner = checkWinner();
	render();
}

//BN renderBoard is responsible for updating the game state  
//BN it go through the square elements and it position and update the textcontent to the asigned player X or O.
//BN after updating the textcontent it check for winner to if not then it update the text cotent to the correlating 
//player turn 
//BN else if theres a tie or winner itll also update as well if the player win 3 times. .

function renderBoard() {
	// transfer the state of the game to the DOM
	squareEls.forEach(function (square, position) {
		square.textContent = PLAYERS[board[position]];
	});

	if (!winner) {
		messageEl.textContent = `Player ${PLAYERS[turn]}'s turn`;

		buttonEl.style.visibility = 'hidden';

	} else if (winner === 'T') {

		messageEl.textContent = 'Its a Tie!!!';




	} else {
		messageEl.textContent = `Player ${PLAYERS[winner]} Wins`;

		buttonEl.style.visibility = 'visible';

		if (PLAYERS[winner] === 'X') {
			xWins++
			if (xWins === 3) {
				
				setTimeout(function () {
					alert(`${PLAYERS[winner]} Player wins 3 times`)
					init();
				}, 1000);
			}
		} else {
			oWins++
			if (oWins === 3) {
				
				setTimeout(function () {
					alert(`${PLAYERS[winner]} Player wins 3 times`)
					init();
				}, 1000);
			}
		}
	}

}