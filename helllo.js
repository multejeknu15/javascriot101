const express = require('express');
const app = express();

const getRandomChar = (min, max) => {
  return String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);
};

const generateComplexHello = () => {
  let complexHello = '';
  const length = 2000;

  for (let i = 0; i < length; i++) {
    const charCode = Math.random() > 0.5 ? getRandomChar(33, 126) : getRandomChar(128, 255);
    complexHello += charCode;
  }

  return complexHello;
};

app.get('/', (req, res) => {
  const message = generateComplexHello();
  const formattedMessage = `<pre>${message}</pre>`;
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Complex Hello World</title>
    </head>
    <body>
      <h1 style="color: red;">A Highly Complex and Elaborate Hello World!</h1>
      <div>${formattedMessage}</div>
    </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



