const number1 = 103;
const number2 = 72;
const number3 = 189;

// getMax関数を定義してください
const getMax = (a, b, c) => {
  if (a > b) {
    if (a > c) {
      return a;
    } else {
      return c;
    }
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}

// 「最大値は○○です」と出力してください
console.log(`最大値は${getMax(number1, number2, number3)}です`);
