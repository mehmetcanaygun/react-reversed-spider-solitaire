import {
  refactorCards,
  shuffleArray,
  splitIntoChunks,
  mergeChunks,
  refactorStock,
  refactorTableau,
  formatCardText,
  isLinedUp,
  isMatch,
  formatTime,
  isPileEmpty,
} from "../../utils/helpers";

it("should return array of objects with cardText and cardId", () => {
  // arrange
  const cardArrBefore = ["1", "2", "3"];
  const expectedCardArr = [
    { cardId: 0, cardText: "1" },
    { cardId: 1, cardText: "2" },
    { cardId: 2, cardText: "3" },
  ];

  // act
  const cardArrAfter = refactorCards(cardArrBefore);

  // assert
  expect(cardArrAfter).toEqual(expectedCardArr);
});

it("should return shuffled array", () => {
  // arrange
  const arrBefore = [5, 2, 8, 10, 14];

  // act
  const arrAfter = shuffleArray(arrBefore);

  // assert
  expect(arrBefore).not.toBe(arrAfter);
});

it("should split an array with the given chunks and return it", () => {
  // arrange
  const arrBefore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunkRule = [2, 2, 2, 2, 2];

  // act
  const arrAfter = splitIntoChunks(arrBefore, chunkRule);

  // assert
  expect(arrAfter).toHaveLength(chunkRule.length);
});

it("should merge chunks and return the array", () => {
  // arrange
  const arrBefore = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9, 10],
  ];
  const expectedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // act
  const arrAfter = mergeChunks(arrBefore);

  // assert
  expect(arrAfter).toEqual(expectedArr);
});

it("should return a double array that contains objects with 'cardId', 'cardText', 'faceUp', and 'pileId' keys", () => {
  // arrange
  const arrBefore = [
    [
      { cardId: 0, cardText: "1" },
      { cardId: 1, cardText: "2" },
    ],
    [
      { cardId: 2, cardText: "3" },
      { cardId: 3, cardText: "4" },
    ],
  ];
  const expectedArr = [
    [
      { cardId: 0, cardText: "1", faceUp: true, pileId: 0 },
      { cardId: 1, cardText: "2", faceUp: true, pileId: 1 },
    ],
    [
      { cardId: 2, cardText: "3", faceUp: true, pileId: 0 },
      { cardId: 3, cardText: "4", faceUp: true, pileId: 1 },
    ],
  ];

  // act
  const arrAfter = refactorStock(arrBefore);

  // assert
  expect(arrAfter).toEqual(expectedArr);
});

it("should return an object with 'pileX' keys, each pile should be an array of objects, objects have 'cardId', 'cardText', 'faceUp', and 'pileId' keys, and faceUp value of the each last object is true", () => {
  // arrange
  const arrBefore = [
    [
      { cardId: 0, cardText: "1" },
      { cardId: 1, cardText: "2" },
    ],
    [
      { cardId: 2, cardText: "3" },
      { cardId: 3, cardText: "4" },
    ],
  ];
  const expectedObj = {
    pile0: [
      { cardId: 0, cardText: "1", faceUp: false, pileId: 0 },
      { cardId: 1, cardText: "2", faceUp: true, pileId: 0 },
    ],
    pile1: [
      { cardId: 2, cardText: "3", faceUp: false, pileId: 1 },
      { cardId: 3, cardText: "4", faceUp: true, pileId: 1 },
    ],
  };

  // act
  const arrAfter = refactorTableau(arrBefore);

  // assert
  expect(arrAfter).toEqual(expectedObj);
});

it("should format text if the text is '1', '10', '11', '12', or '13'", () => {
  // arrange
  const textBeforeFirst = "1";
  const expectedTextFirst = "A";

  const textBeforeSecond = "5";
  const expectedTextSecond = "5";

  // act
  const textAfterFirst = formatCardText(textBeforeFirst);
  const textAfterSecond = formatCardText(textBeforeSecond);

  // assert
  expect(textAfterFirst).toBe(expectedTextFirst);
  expect(textAfterFirst).not.toBe(textBeforeFirst);
  expect(textAfterSecond).toBe(expectedTextSecond);
});

it("should check if the given array of card object are lined up correctly and return a Boolean", () => {
  // arrange
  const cardsArrLinedUp = [
    { cardId: 0, cardText: "9" },
    { cardId: 1, cardText: "10" },
    { cardId: 2, cardText: "11" },
  ];

  const cardsArrNotLinedUp = [
    { cardId: 0, cardText: "3" },
    { cardId: 1, cardText: "6" },
    { cardId: 2, cardText: "1" },
  ];

  // act
  const resultOne = isLinedUp(cardsArrLinedUp);
  const resultTwo = isLinedUp(cardsArrNotLinedUp);

  // assert
  expect(resultOne).toBeTruthy();
  expect(resultTwo).toBeFalsy();
});

it("should check if there's a match from '1' to '13' in the given array and return a Boolean", () => {
  // arrange
  const cardsArrMatch = [
    { cardId: 13, cardText: "5" },
    { cardId: 14, cardText: "6" },
    { cardId: 0, cardText: "1" },
    { cardId: 1, cardText: "2" },
    { cardId: 2, cardText: "3" },
    { cardId: 3, cardText: "4" },
    { cardId: 4, cardText: "5" },
    { cardId: 5, cardText: "6" },
    { cardId: 6, cardText: "7" },
    { cardId: 7, cardText: "7" },
    { cardId: 8, cardText: "8" },
    { cardId: 9, cardText: "10" },
    { cardId: 10, cardText: "11" },
    { cardId: 11, cardText: "12" },
    { cardId: 12, cardText: "13" },
  ];
  const cardsArrNoMatch = [
    { cardId: 4, cardText: "5" },
    { cardId: 5, cardText: "6" },
    { cardId: 6, cardText: "7" },
    { cardId: 7, cardText: "7" },
    { cardId: 8, cardText: "8" },
    { cardId: 9, cardText: "10" },
    { cardId: 10, cardText: "11" },
    { cardId: 11, cardText: "12" },
    { cardId: 12, cardText: "13" },
  ];
  const cardsArrNoMatchSecond = [
    { cardId: 0, cardText: "1" },
    { cardId: 1, cardText: "2" },
    { cardId: 2, cardText: "3" },
    { cardId: 3, cardText: "4" },
    { cardId: 4, cardText: "5" },
    { cardId: 5, cardText: "6" },
    { cardId: 6, cardText: "7" },
    { cardId: 7, cardText: "7" },
    { cardId: 8, cardText: "8" },
    { cardId: 9, cardText: "10" },
    { cardId: 10, cardText: "11" },
    { cardId: 11, cardText: "12" },
    { cardId: 12, cardText: "13" },
    { cardId: 13, cardText: "5" },
    { cardId: 14, cardText: "6" },
  ];

  // act
  const resultOne = isMatch(cardsArrMatch);
  const resultTwo = isMatch(cardsArrNoMatch);
  const resultThree = isMatch(cardsArrNoMatchSecond);

  // assert
  expect(resultOne).toBeTruthy();
  expect(resultTwo).toBeFalsy();
  expect(resultThree).toBeFalsy();
});

it("should take seconds and returns time string in 'mm:ss' format", () => {
  // arrange
  const timeInSeconds = 100;
  const expectedTime = "01:40";

  // act
  const formattedTime = formatTime(timeInSeconds);

  // assert
  expect(formattedTime).toBe(expectedTime);
});

it("should check if any of the arrays in the given object is empty and return a Boolean", () => {
  // arrange
  const objOne = {
    a: [1, 2, 3],
    b: [4, 5, 6],
    c: [7, 8, 9],
  };
  const objTwo = {
    a: [1, 2, 3],
    b: [],
    c: [7, 8, 9],
  };

  // act
  const resultOne = isPileEmpty(objOne);
  const resultTwo = isPileEmpty(objTwo);

  // assert
  expect(resultOne).toBeFalsy();
  expect(resultTwo).toBeTruthy();
});
