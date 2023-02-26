const moveZeros = (arr) => {
    const newArr = Array(arr.length).fill(0);
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArr[index] = arr[i];
            index++;
        }
    }
    return newArr;
};

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
