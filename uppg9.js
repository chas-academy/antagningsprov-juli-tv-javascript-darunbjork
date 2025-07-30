

function uppg9 (){
    const sort = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                console.log(arr[i], "jämt");
            } else {
                console.log(arr[i], "udda");
            }
        }
    };

    sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  
}

uppg9();
module.exports = { uppg9 };