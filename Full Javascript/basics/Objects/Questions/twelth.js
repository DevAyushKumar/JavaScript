function convert(obj){
    const result = {};
    for(const key in obj){
        const keys = key.split("_");
        let current = result;

        keys.forEach((i,j) => {
            if(j === keys.length-1){
                current[i] = obj[key];
            } else {
                if(!current[i]){
                    current[i] = {};
                } 
                current = current[i];
            }
        });
    }
    return result;
}

const data = {
    user_name: "Rohit",
    user_age: 22,
    user_address_city: "Mumbai",
    user_address_pin: 400001,
    company_name: "TechCorp"
};

const nested = convert(data);
console.log(nested);