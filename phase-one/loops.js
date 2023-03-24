const oddOrEven = (number) => {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}

for (let i = 1 ; i <= 20 ; i++) {
  oddOrEven(i);
}