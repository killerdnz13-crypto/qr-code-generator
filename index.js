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
