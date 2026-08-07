/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

/**
 * Input prompt example
 */

import inquirer from "inquirer";
import qr from "qr-image";
import { createWriteStream, writeFile } from "node:fs";

const answers = await inquirer.prompt([
  {
    type: "input",
    name: "url",
    message: "Escreva aqui sua URL",
  },
]);

// console.log(answers.url);

const qrPNG = qr.image(answers.url, { type: "png" });
qrPNG.pipe(createWriteStream("meu_qr.png"));

writeFile("url.txt", answers.url, (err) => {
  if (err) throw err;
});
