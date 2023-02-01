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
function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
