let ar = []; // 配列

for (let i = 1; i <= 100; i = i+1) {
  ar.push(i);
}

let sum = 0;

ar.forEach((v) => {
  sum = sum + v;
})

console.log(ar);
console.log(sum);

// ar.forEach((v) => {
//   console.log(v);
// });

// let object = { text: "あああ", digit: 5 }; // オブジェクト
