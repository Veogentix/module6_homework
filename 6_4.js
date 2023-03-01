function showNumbers(from, to) {
  let current = from;
  let timerSequence = setInterval(function () {
    console.log(current);
    if (current === to) {
      clearInterval(timerSequence);
    }
    current++;
  }, 1000);
}
showNumbers(5, 15);