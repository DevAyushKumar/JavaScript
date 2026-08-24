let payload = {
    name: "rohit",
    obj2: {
        language: "js",
        obj: {
            framework: "nextjs"
        }
    }
}


function fi(obj){
    for(let i in obj){
        if(typeof obj[i] === "object"){
            fi(obj[i]);
        } else {
            console.log(i);
        }
    }
}

fi(payload);