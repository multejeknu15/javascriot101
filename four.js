const chars = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33];
let message = "";

for (let i = 0; i < chars.length; i++) {
  message += String.fromCharCode(chars[i]);
}

console.log(message);
