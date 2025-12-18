function checkOrder(available, ordered) {
  if (available < ordered) {
    console.log('Your order is too large, we don’t have enough goods.');
  } else if (ordered === 0) {
    console.log('Your order is empty');
  } else if (ordered <= available) {
    console.log('Your order is accepted');
  }
}

checkOrder(5, 20);
checkOrder(5, 0);
checkOrder(10, 2);
