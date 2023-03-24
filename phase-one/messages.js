const generateMessage = (name) => {
  return `Hi ${name}! 50% off our best candies for you today!`;
};

const generateMessages = (arrayOfNames) => {
  return arrayOfNames.map(generateMessage);
};

