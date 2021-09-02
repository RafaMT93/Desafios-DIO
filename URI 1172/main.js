let arr = [];

for (let i = 0; i < 10; i++) {
  arr[i] = gets();
  console.log(`X[${i}] = ${arr[i] <= 0 ? 1 : arr[i]}`);
}
