//1

const getArrayParams = (...arr) => {
  let result = {};
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }

    if (arr[i] < min) {
      min = arr[i]
    }

    sum += arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));
  result = {min, max, avg};
  return result;
}

//2

const summElementsWorker = (...arr) => {
  let array = [...arr];
  let sum = 0;
  for (let i of array) {
    sum += i
  }
  return sum
};

const differenceMaxMinWorker = (...arr) => {
  let array = [...arr];
  if (array.length === 0) {
    return 0
  }
  let max = Math.max(...array);
  let min = Math.min(...array);
  return max - min;
};


const differenceEvenOddWorker = (...arr) => {
  let array = [...arr];
  let sumEvenElement = 0;
  let sumNotEvenElement = 0;
  for (let i of array) {
    if (i % 2 === 0) {
      sumEvenElement += i;
    } else {
      sumNotEvenElement += i;
    }
  }
  return sumEvenElement - sumNotEvenElement
};

const averageEvenElementsWorker = (...arr) => { //Правильно ли реализовано условие [] => 0 ?
  let array = [...arr];
  let sumEvenElement = 0;
  let counter = 0;
  if (array.length === 0) {
    return array.length
  }
  for (let i of array) {
    if (i % 2 === 0) {
      sumEvenElement += i;
      counter++;
    }
  }
  return sumEvenElement / counter;
};

//3
const makeWork = (arrOfArr, func) => {
  let array = [...arrOfArr];
  let maxWorkerResult = -Infinity;
  let sumFunc = -Infinity;
  for (let i of array) {
    sumFunc = func(...i);
    if (sumFunc > maxWorkerResult) {
      maxWorkerResult = sumFunc
    }
  }
  return maxWorkerResult
};

