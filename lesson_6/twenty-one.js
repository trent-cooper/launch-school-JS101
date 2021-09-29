/* eslint-disable max-lines-per-function */
/* eslint-disable indent */
const readline = require('readline-sync');
const STANDARD_DECK = [
  ['H', '2'], ['D', '2'], ['C', '2'], ['S', '2'],
  ['H', '3'], ['D', '3'], ['C', '3'], ['S', '3'],
  ['H', '4'], ['D', '4'], ['C', '4'], ['S', '4'],
  ['H', '5'], ['D', '5'], ['C', '5'], ['S', '5'],
  ['H', '6'], ['D', '6'], ['C', '6'], ['S', '6'],
  ['H', '7'], ['D', '7'], ['C', '7'], ['S', '7'],
  ['H', '8'], ['D', '8'], ['C', '8'], ['S', '8'],
  ['H', '9'], ['D', '9'], ['C', '9'], ['S', '9'],
  ['H', '10'], ['D', '10'], ['C', '10'], ['S', '10'],
  ['H', 'J'], ['D', 'J'], ['C', 'J'], ['S', 'J'],
  ['H', 'Q'], ['D', 'Q'], ['C', 'Q'], ['S', 'Q'],
  ['H', 'K'], ['D', 'K'], ['C', 'K'], ['S', 'K'],
  ['H', 'A'], ['D', 'A'], ['C', 'A'], ['S', 'A'],
];

function shuffle(array) {
  for (let idx = array.length - 1; idx > 0; idx--) {
    let otherIdx = Math.floor(Math.random() * (idx + 1));
    [array[idx], array[otherIdx]] = [array[otherIdx], array[idx]];
  }
}

function dealHands(deck, playerHand, dealerHand) {
  playerHand.push(deck.pop());
  playerHand.push(deck.pop());
  dealerHand.push(deck.pop());
  dealerHand.push(deck.pop());
}

function dealCard(deck, user) {
  user.push(deck.pop());
}

function displayHands(playerHand, dealerHand, showHidden = 0) {
  console.clear();
  if (showHidden) {
    console.log(`Dealer's Hand: (Total = ${sumHand(dealerHand)})`);
    displayCard(dealerHand);
  } else {
    console.log("Dealer's Hand: (Total = ??)");
    displayCard(dealerHand, 1);
  }
  console.log('');
  console.log('----------------------------');
  console.log('');
  console.log(`Player's Hand: (Total = ${sumHand(playerHand)})`);
  displayCard(playerHand);
  console.log('');
}

function displayCard(hand, hideCard = 0) {
  let cardLine = ['', '', '', '', '', '', ''];
  let handCopy = hand.slice('');
  if (hideCard) {
    handCopy[0] = ['?', '?'];
  }

  handCopy.forEach(card => {
    cardLine[0] += '  ---------  ';
    if (card[1] === '10') {
      cardLine[1] += ` |${card[1]}     ${card[1]}| `;
    } else {
      cardLine[1] += ` |${card[1]}       ${card[1]}| `;
    }
    cardLine[2] += ' |         | ';
    cardLine[3] += ` |    ${card[0]}    | `;
  });

  console.log(cardLine[0]);
  console.log(cardLine[1]);
  console.log(cardLine[2]);
  console.log(cardLine[3]);
  console.log(cardLine[2]);
  console.log(cardLine[1]);
  console.log(cardLine[0]);
}

function checkHand(hand, user = 0) {

  if (sumHand(hand) > 21) {
    return 1;
  } else if (user && sumHand(hand) >= 17) {
    return 2;
  } else {
    return false;
  }
}

function sumHand(hand) {
  let values = hand.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === 'A').forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function displayWinner(playerHand, dealerHand) {
  if (checkHand(playerHand) === 1) {
    console.log('You busted :( Dealer wins this hand.');
  } else if (checkHand(dealerHand) === 1) {
    console.log('Dealer busted! You win this hand.');
  } else if (sumHand(playerHand) > sumHand(dealerHand)) {
    console.log('You win!');
  } else if (sumHand(dealerHand) > sumHand(playerHand)) {
    console.log('Dealer wins.');
  } else {
    console.log('It\'s a tie!');
  }
}

function playAgain() {
  let answer = readline.question('Would you like to play another hand? (y/n): ').toLowerCase()[0];
  return answer === 'y';
}

//*Play Hand Loop*
while (true) {
  //Initialize Deck
  let deck = STANDARD_DECK.slice();
  shuffle(deck);

  //Deal Hand
  //Display Hands
  let playerHand = [];
  let dealerHand = [];
  dealHands(deck, playerHand, dealerHand);
  displayHands(playerHand, dealerHand);

  //*Player Turn Loop*
  while (true) {
    //Check Hand Function (Checking for 21)
          //If (21) break;
    if (checkHand(playerHand)) break;

    //Prompt: Stay or Hit
    let answer;
    while (true) {
      console.log('(H)it or (S)tay?');
      answer = readline.question().toLowerCase()[0];
      if (['h', 's'].includes(answer)) break;
      console.log('Must enter H/S to proceed');
    }
    //If: Hit
      //Check Hand Function (Checking for 21/Bust)
        //If 21/Bust break;
    //Else If: Stay
      //Break;
    if (answer === 's' || checkHand(playerHand)) break;
    dealCard(deck, playerHand);
    displayHands(playerHand, dealerHand);
    console.log(`You chose to hit - Your hand total is now ${sumHand(playerHand)}`);
  }

  //Store Player Hand Result
  displayHands(playerHand, dealerHand);
  if (checkHand(playerHand) === 1) {
    displayWinner(playerHand, dealerHand);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    console.log('You chose to stay!');
    console.log(`You're hand total is ${sumHand(playerHand)}`);
  }


  readline.question('Press <Enter> to continue');


  //*Dealer Turn Loop*
  while (true) {
    //Display Full Dealer Hand
    displayHands(playerHand, dealerHand, 1);
    //Check Hand Function
      //If (21) break;
    //If (Total >= 17)
      //Break;
    if (checkHand(dealerHand, 1)) break;
    //Else if (Total < 17)
    //Deal Card
    dealCard(deck, dealerHand);
  }
    //Check Dealer Hand Result
  displayHands(playerHand, dealerHand, 1);
  if (checkHand(dealerHand, 1) === 1) {
    displayWinner(playerHand, dealerHand);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else if (checkHand(dealerHand, 1)) {
    console.log('The dealer stayed @ above 17.');
    console.log(`Dealer hand total is ${sumHand(dealerHand)}`);
  }

  readline.question('Press <Enter> to continue');

    //Compare Hand Results
    //Display Winner
  displayHands(playerHand, dealerHand, 1);
  displayWinner(playerHand, dealerHand);

    //Prompt 'another hand?'

  if (!playAgain()) break;
}