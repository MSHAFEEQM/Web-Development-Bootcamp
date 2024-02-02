/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([
    {"message":"Type your URL1: ",
    "name":"URL1"    
    },{"message":"Type your URL2: ",
    "name":"URL2"    
    }
  ])
  .then((answers) => {
    console.log(answers)
    var qr_svg = qr.image(answers.URL1, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_image1.png'));
    fs.writeFile("url1.txt", answers.URL1, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
      console.log(answers)
      var qr_svg = qr.image(answers.URL2, { type: 'png' });
      qr_svg.pipe(fs.createWriteStream('qr_image2.png'));
      fs.writeFile("url2.txt", answers.URL2, (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
        }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log( "Prompt couldn't be rendered in the current environment")
    } else {
      console.log("Something else went wrong")
    }
  });