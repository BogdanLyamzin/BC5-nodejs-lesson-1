const fs = require("fs");

fs.readFile("read.txt", "utf8", (error, data)=> {
    if(error){
        console.log("File not found")
    }
    else { 
        console.log(data);
    }
})

// const fileContent = fs.readFileSync("read.txt", "utf8");
// console.log(fileContent)