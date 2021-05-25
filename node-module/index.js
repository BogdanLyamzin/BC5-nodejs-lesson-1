const users = require("./users"); // импорт

// console.log(users);

const {admins} = require("./users");

// console.log(admins);

const getMonth = require("./getCurrentMonth");
// console.log(getMonth);

const currentMonth = require("./getCurrentMonth")(); // импорт + вызов функции сразу
// console.log(currentMonth);
// console.log(`Номер текущего месяца - ${currentMonth}`)

const userProps = {
    name: "Alex",
    lastName: "Македонский",
    birthday: "12.03.1980"
};

// const user = require("./userClass")(userProps);
// console.log(user);
