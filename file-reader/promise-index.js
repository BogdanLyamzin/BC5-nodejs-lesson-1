// const fs = require("fs/promises");
const fs = require("fs").promises;

/*
const getFile = (filePath) => {
    const fileRead = fs.readFile(filePath, "utf8");
    fileRead
        .then(data => console.log(data))
        .catch(error => console.log(error))
}
*/

const getFile = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, "utf8");
        console.log(data);
        return data;
    }
    catch(error){
        throw error;
    }
}

getFile("read.txt")