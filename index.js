// Code your solutions in this file
function writeCards(array, name){

    var arr = [];
    
    for (let i = 0; i < array.length; i++){
        arr.push("Thank you, " + array[i] + ", for the wonderful " + name + " gift!");
    };

    return arr;
}
;

function countDown(number){
    for (number; number >= 0; number--){
        console.log(number);
    }
};


