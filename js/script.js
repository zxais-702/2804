// let arr = ['damir', 'samir', 'farzod', 'shoxrux', 'akbar']
// let name = arr.sort((a,b) => b.length - a.length)
// console.log(name[0]);

let arr = ["vlad", "damir", "akbar", "samir", "shoxrux", "farzod"]

let max = 0

let users = [
    {
        name: "Vlad",
        age: 16,
        isMarried: false,
        country: "Uzbekistan",
    },
    {
        name: "Damir",
        age: 13,
        isMarried: false,
        country: "Uzbekistan",
    },
    {
        name: "Akbar",
        age: 15,
        isMarried: true,
        country: "Thailand",
    },
    {
        name: "Samir",
        age: 12,
        isMarried: true,
        country: "North Korea",
    },
    {
        name: "Shoxrux",
        age: 18,
        isMarried: false,
        country: "India",
    },
    {
        name: "Farzod",
        age: 20,
        isMarried: true,
        country: "UAE",
    },
]

users.find((user) => {
    if (user.age > max) {
        max = user.age;
    }
})
console.log(max);