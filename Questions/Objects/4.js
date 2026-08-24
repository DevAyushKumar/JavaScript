function mer(obj1,obj2){
    return {...obj1,...obj2};
}
object1 = {
    name : 'Ayush',
    age : 18
}
object2 = {
    city : 'Ranchi',
    role : 'Student'
}
console.log(mer(object1,object2));