function Find(obj, target){
    const ne = [];
    for(let i in obj){
        if(obj[i]=== target){
            ne.push(i);
        }
    }
    return ne;
}

const data = {a:1, b:2, c: 3, d:4};
console.log(Find(data, 1));