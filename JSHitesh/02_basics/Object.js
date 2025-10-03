const symbol1 = Symbol("This is a symbol");
const JSUser = {
    name: "Anuj",
    "Full Name": "Anuj Kumar Soni",
    age: 24,
    symbol1: "This is a symbol1",

    email: "anujkrsoni2000@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"],
    score: [23, 45, 67, 89],
}
console.log(JSUser.email); 
console.log(JSUser["email"]);
console.log(JSUser["Full Name"])
console.log(JSUser[symbol1]);

