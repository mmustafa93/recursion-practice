const fibs = (num) => {
    array = [];
    for (let i = 0; i < num; i++){
        if (i < 2){
            array.push(i)
        } else {
            array.push(array[i-1] + array[i-2]);
        }
        
    }
    return array
}

const fibsRec = (num) => {
    console.log("Recursive")
    if (num == 0){
        return [];
    } else if (num < 3) {
        return num == 1 ? [0] : [0, 1];
    } else {
        const array = fibsRec(num-1);
        return array.concat(array[array.length - 2] + array[array.length - 1]);
    }
}

const result = fibs(8);
const resultRec = fibsRec(8);
console.log(result)
console.log(resultRec)