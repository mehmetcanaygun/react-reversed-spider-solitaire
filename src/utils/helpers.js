// Suffle Array - Takes and returns shuffled array
export const shuffleArray = (arr) => {
  let currentIndex = arr.length;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
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
    return stockPile.map((card, index) => {
      return {
        pileId: index,
        cardText: card,
        faceUp: true,
      };
    });
  });
};

// Refactor Tableau - Takes tableau array that only consists of card numbers, returns a tableau object by adding pileId and faceUp info to each card
export const refactorTableau = (arr) => {
  const tableauObj = {};

  arr.map((pile, pIndex) => {
    return (tableauObj[`pile${pIndex}`] = pile.map((card, cIndex) => {
      return {
        pileId: pIndex,
        cardText: card,
        faceUp: cIndex === pile.length - 1 ? true : false,
      };
    }));
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

// Is Lined Up - Check if the given array items decreases by one
export const isLinedUp = (arr) => {
  let val = +arr[0].cardText;
  let returnValue = true;

  arr.forEach((card) => {
    returnValue = +card.cardText !== val ? false : true;
    val++;
  });

  return returnValue;
};
