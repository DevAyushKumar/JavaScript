//Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,,30,31] ?
const sortedData = (arr1, arr2) => {
    let i=1;
    let j=1;
    let array1 = arr1[0];
    let array2 = arr2[0];

    let meergeedArray = [];

    while(array1 || array2){

        if(array2 === undefined || array1 < array2){
            meergeedArray.push(array1);
            array1 = arr1[i];
            i++;
        } else {
            meergeedArray.push(array2);
            array2 = arr2[j];
            j++;
        }
    }
    console.log(meergeedArray);
}

sortedData([1,3,4,5],[2,6,8,9])