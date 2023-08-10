const key = [7, 4, 11, 11, 14, 22, 14, 17, 11, 3];

function decipher(charCodes) {
  let result = '';
  for (let i = 0; i < charCodes.length; i++) {
    result += String.fromCharCode(charCodes[i] + 97 - i);
  }
  return result;
}

console.log(decipher(key));
