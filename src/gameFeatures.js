// A deck of cards
export const cardDeck = [
  "13",
  "12",
  "11",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
];

// Stock rule to determine how many cards are going to be in the stock
export const stockRule = [10, 10, 10, 10, 10];

// Pile rule to determine how many cards each pile will have
export const pileRule = [6, 6, 6, 6, 5, 5, 5, 5, 5, 5];

// Pile indexes to determine which cards will be rendered face up
export const pileFaceUpRule = [
  [0, 5],
  [1, 5],
  [2, 5],
  [3, 5],
  [4, 4],
  [5, 4],
  [6, 4],
  [7, 4],
  [8, 4],
  [9, 4],
];
