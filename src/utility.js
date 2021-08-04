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

export const splitIntoChunks = (arr, chunks) => {
  let arrWithChunks = [];
  let startIndex = 0;

  chunks.forEach((chunkSize) => {
    arrWithChunks.push(arr.slice(startIndex, startIndex + chunkSize));
    startIndex += chunkSize;
  });

  return arrWithChunks;
};
