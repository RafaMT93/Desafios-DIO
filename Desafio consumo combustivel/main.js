function calculateDistance(x, y) {
  let time = parseInt(x);
  let velocity = parseInt(y);
  let mediaSpend = time * velocity;
  let totalSpend = mediaSpend / 12;

  return console.log(totalSpend.toFixed(3));
}
