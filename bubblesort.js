function swap(i, j) {


    [i, j] = [j, i]
    return [i, j]
}

function comparison(i, j) {
    if(i > j){
        return true;
    }
    return false;
}

function bubbleSort(array) {
    for (let i = array.length - 1; i > 0 ; i--){
        for(let j = 0; j < i; j++){
            if(comparison(array[j], array[j+1])){
                let sortedArray = swap(array[j], array[j+1]);
                array[j] = sortedArray[0];
                array[j+1] = sortedArray[1]
                // [array[j], array[j+1]]=[array[j+1], array[j]]
            }
        }
    }
    return array;
}
