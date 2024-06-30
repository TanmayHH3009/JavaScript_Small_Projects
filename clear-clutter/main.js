// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg
// 7. harry.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

const express = require("express");
const fs = require("fs");
const path = require("path");

const directoryPath =
  "/Users/tanmayhatwar/WebDevHarry/backEnd/clear-clutter/filesRandom";

//function to create folder if folder does not exist
//fs.existsSycn return t/f on existance
//fs.mkdirSync creates new directory
function createFolderIfNotExist(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
}

// function to move file in respective folder

function movefiletoFolder(filename, foldername) {
  const folderPath = path.join(directoryPath, foldername);

  createFolderIfNotExist(folderPath);
  const oldpath = path.join(directoryPath, filename);

  const newpath = path.join(folderPath, filename);

  fs.renameSync(oldpath, newpath);
}

//read the directory

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log(`unable to read the directory` + err);
  }
  files.forEach((file) => {
    const ext = path.extname(file).slice(1);

    if (ext) {
      movefiletoFolder(file, ext);
    }
  });
});
