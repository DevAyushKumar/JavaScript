There are 6 ways to create objects in JavaScript
-> 1. object literal 
    -> let person = {
        name : "Ayush kumar",
        age : 18
    }

    2. Object constructor
      -> const object = new Object()
         {
            name : "Ayush";
            age : 18;
         }

    3. Prototype inheritance
      -> const person = {
            greet(){
                console.log("Hello");
            }
      };
         const student = Object.create(person);
         student.greet();

    4. Constructor function
      -> function student(name, age){
                this.name = name;
                this.age = age;
      }
      const s1 = new student("Ayush", 18);

    5. Class (modern)
      -> class student{
            constructor(name, age){
                this.name;
                this.age,
            }
      }
      const s1 = new student("Ayush", 10);

    6. Factory function
      -> function student(name, age){
              return {
                name,
                age
              };
      }
      const s1 = student("Ayush", 18);