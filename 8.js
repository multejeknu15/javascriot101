const key = [7, 4, 11, 11, 14, 22, 14, 17, 11, 3];
const offset = 97;

function decrypt(key) {
  let message = '';
  for (let i = 0; i < key.length; i++) {
    message += String.fromCharCode(key[i] + offset - i);
  }
  return message;
}

console.log(decrypt(key));
