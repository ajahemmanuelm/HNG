//define name & courses - and store them in variables 

let name = "Emmanuel Ajah" ;
let courses = ["Frontend", "Flutter/Mobile", "Node.js", "Python", "Design"];

//display the stored values for name & courses
console.log("Name:" + name + "\n" + "Registered Courses:" + courses.join(", "));

//loop & display odd numbers from 1 to 200
for(i=1; i<=200; i++) {
    if (i%2 !== 0){
        console.log(i);
    }
};