const printHello = () => {
  console.log('Hello!');
}

const executeAfterDelay = (delay, delayFunction) => {
  return setTimeout(delayFunction, delay * 1000);
}

executeAfterDelay(5, printHello);