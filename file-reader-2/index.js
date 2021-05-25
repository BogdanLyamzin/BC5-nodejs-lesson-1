const fs = require("fs").promises;
const path = require("path");

// console.log(__filename);
// console.log(__dirname);

const filePath = path.join(__dirname, "files", "read.txt");
// console.log(filePath);
// const fileRead = fs.readFile(filePath, "utf8");

// fileRead
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// fs.appendFile(filePath, "\nНо и от сгущенки не откажется") // дописывает в конец файла

// fs.writeFile(filePath, "Это все потому, что кто-то слишком много ест"); // перезаписывает содержимое файла

// fs.unlink(filePath); // удаляет файл