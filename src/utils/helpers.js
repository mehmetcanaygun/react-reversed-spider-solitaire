// Refactor Cards - Takes an array of card texts and returns shuffled 104 card objects that cardId attribute is attached to each of them
export const refactorCards = (arr) => {
  const refactoredCards = arr.map((card, index) => {
    return {
      cardText: card,
      cardId: index,
    };
  });

  return shuffleArray(refactoredCards);
};

// Suffle Array - Takes and returns shuffled array
export const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
};

// Split Into Chunks - Takes the main array and chunk rule array and returns splitted array
export const splitIntoChunks = (arr, chunks) => {
  let arrWithChunks = [];
  let startIndex = 0;

  chunks.forEach((chunkSize) => {
    arrWithChunks.push(arr.slice(startIndex, startIndex + chunkSize));
    startIndex += chunkSize;
  });

  return arrWithChunks;
};

// Merge Chunks - Takes an array with chunks and returns a merged array
export const mergeChunks = (arr) => [].concat.apply([], arr);

// Refactor Stock - Takes stock array that only consists of card numbers, returns an array by adding pileId and faceUp info to each card
export const refactorStock = (arr) => {
  return arr.map((stockPile) => {
    return stockPile.map(({ cardText, cardId }, index) => {
      return {
        pileId: index,
        cardText,
        cardId,
        faceUp: true,
      };
    });
  });
};

// Refactor Tableau - Takes tableau array that only consists of card numbers, returns a tableau object by adding pileId and faceUp info to each card
export const refactorTableau = (arr) => {
  const tableauObj = {};

  arr.map((pile, pIndex) => {
    return (tableauObj[`pile${pIndex}`] = pile.map(
      ({ cardText, cardId }, cIndex) => {
        return {
          pileId: pIndex,
          cardText,
          cardId,
          faceUp: cIndex === pile.length - 1 ? true : false,
        };
      }
    ));
  });

  return tableauObj;
};

// Format Card Text - Takes card text (card number) and returns formatted card text (card symbol) if it equals to either one of '13', '12', '11' or '1'
export const formatCardText = (card) => {
  switch (card) {
    case "13":
      return "K";
    case "12":
      return "Q";
    case "11":
      return "J";
    case "1":
      return "A";
    default:
      return card;
  }
};

// Is Lined Up - Check if the given array items increases by one
export const isLinedUp = (arr) => {
  let val = +arr[0].cardText;
  let returnValue = true;

  arr.forEach((card) => {
    returnValue = +card.cardText !== val ? false : true;
    val++;
  });

  return returnValue;
};

// Is Match - Check if the given pile has a match from 'A' to 'K'
export const isMatch = (arr) => {
  // Iterate the pile and find sequence from A to K
  if (arr[arr.length - 1].cardText === "13" && arr.length >= 13) {
    if (isLinedUp(arr.slice(arr.length - 13, arr.length - 1))) {
      return true;
    } else {
      return false;
    }
  }
};

// Format Time - Takes seconds and return it in a formatted way
export const formatTime = (t) => {
  if (t > 60 * 60) return ":(";
  return new Date(t * 1000).toISOString().substr(14, 5);
};

// Is Pile Full - Checks if there's an empty pile
export const isPileEmpty = (arr) => {
  let returnValue = false;

  for (let pile in arr) {
    if (arr[pile].length === 0) {
      returnValue = true;
    }
  }

  return returnValue;
};
