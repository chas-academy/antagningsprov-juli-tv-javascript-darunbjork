

function uppg8(){

const persons = [
    { name: "Darun", age: 35 },
    { name: "Benjamin", age: 40 },
    { name: "Hedvig", age: 25 },
    { name: "John", age: 31 },
    { name: "Jane", age: 29 }
];

const printOver30 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > 30) {
            console.log(arr[i].name);
        }
    }
};

printOver30(persons);


}

uppg8();
module.exports = { uppg8 };