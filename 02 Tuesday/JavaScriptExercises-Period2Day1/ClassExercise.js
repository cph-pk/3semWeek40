const myList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function myFilter(array, callback) {
    const list = [];
    for(idx in array) {
        if(callback(array[idx])) {
            list.push(array[idx]);
        }
    }
    return list;  
}

function my_callback(result) {
    let x = result * 10;
    if (x < 500) {
        return true;
    } else {
        return false;
    }
}

console.log(myFilter(myList, my_callback));

