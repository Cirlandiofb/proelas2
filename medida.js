// You need to install 'fs' and 'image-to-pdf' packages using npm
// npm install fs image-to-pdf

const fs = require('fs');
const imageToPdf = require('image-to-pdf');

fs.readdirSync('.').forEach(file => {
  if (['jpg', 'jpeg', 'png'].includes(file.split('.').pop())) {
    const fileName = file.split('.').slice(0, -1).join('.');
    imageToPdf([file], `${fileName}.pdf`).pipe(fs.createWriteStream(`${fileName}.pdf`));
  }
});
