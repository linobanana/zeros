module.exports = function zeros(expression) {
  let array = expression.split('*');
  for (let i = 0; i < array.length; i++) {
    if (array[i].indexOf('!!') !== -1) {
      let number = Number(array[i].slice(0, array[i].indexOf('!')));
      if (number % 2 === 0) {
        let counter = 0;
        for (let j = 2; j <= number; j += 2) {
          if (j === 2) {
            counter = BigInt(j);
          } else {
              counter *= BigInt(j);
            }
        }
        array[i] = counter.toString();
      } else {
          let counter = 0;
          for (let j = 1; j <= number; j += 2) {
            if (j === 1) {
              counter = BigInt(1);
            } else {
                counter *= BigInt(j);
            }
          }
          array[i] = counter.toString();
      }
    } else {
      let number = Number(array[i].slice(0, array[i].indexOf('!')));
      let counter = 0;
      for (let j = 1; j <= number; j++) {
        if (j === 1) {
          counter = BigInt(1);
        } else {
          counter *= BigInt(j);
        }
      }
      array[i] = counter.toString();
    }
  }
  let arrayMultiplicationResult = 0;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      arrayMultiplicationResult = BigInt(array[i]);
    } else {
      arrayMultiplicationResult *= BigInt(array[i]);
    }
  }
  arrayMultiplicationResult = arrayMultiplicationResult.toString();
  let reverseString = arrayMultiplicationResult.split('').reverse().join('');
  let numberOfZeros = 0;
  for (let i = 0; i < reverseString.length; i++) {
    if (reverseString[i] === '0') {
      numberOfZeros++;
    }
    if (reverseString[i + 1] !== '0') {
      break;
    }
  }
  return numberOfZeros;
}