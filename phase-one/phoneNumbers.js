const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

const checkLength = (phoneNumber) => {
  return phoneNumber.length <= 10;
};

const filterLongNumbers = (arrayOfNumbers) => {
  return arrayOfNumbers.filter(checkLength);
};
  

