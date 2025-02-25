const arr = [1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1];

function sortArray(arr) {
  let st = 0;
  let en = arr.length - 1;

  while (st < en) {
    if (arr[st] == 1) {
      let temp = arr[st];
      arr[st] = arr[en];
      arr[en] = temp;
      en--;
    } else {
      st++;
    }
  }

  return arr;
}

console.log(sortArray(arr));
