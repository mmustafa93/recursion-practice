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

const result = fibs(8);
console.log(result)