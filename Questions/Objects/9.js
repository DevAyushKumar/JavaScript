function val(obj,target){
    let ne = [];
    for(key in obj){
        if(obj[key] == target){
            ne.push(key);
        }
    }
    return ne;
}

const student = {
    a:1,
    b:2,
    c:3,
    d:4
}

console.log(val(student,4))