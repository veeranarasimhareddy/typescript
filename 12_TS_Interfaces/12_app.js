// Create a Student Interface , and printStudent function
function printStudent(student) {
    console.log("Student Name : " + student.stdName + " \n                 Student Age : " + student.age + " \n                 Student Course : " + student.course + " \n                 Student City : " + student.address.city + " \n                 Student State : " + student.address.state + " \n                 Student Country : " + student.address.country + "\n                ");
}
var abc = {
    stdName: 'John',
    age: 40,
    course: 'Java',
    address: {
        city: 'Hyderabad',
        state: 'State',
        country: 'India'
    }
};
printStudent(abc);
