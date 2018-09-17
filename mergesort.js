function split(arr) {
    if (arr.length === 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return [left, right];
}

function merge(left, right){
    let sortedArray = [];
    // if(left.length === 1 && right.length === 1){
    //     if(right > left){
    //         return left.concat(right);
    //     }
    //     else{
    //         return right.concat(left);
    //     }
    // }
    let i = 0;
    let j = 0
    while(i < left.length && j < right.length){
        if(left[i] > right[j]){
            sortedArray.push(right[j])
            j++;
        }
        else{
            sortedArray.push(left[i])
            i++;
        }
    }
    if(right.slice(j).length > 0){
        sortedArray.push(...right.slice(j));
    }
    else{
        sortedArray.push(...left.slice(i));
    }

    return sortedArray;

}

//1,4,7       2,5
//1, 2


//3 4    2 5
//
