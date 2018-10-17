// Create a Student Interface , and printStudent function

interface Student {
    stdName : string,
    age: number,
    course : string,
    address : {
        city : string,
        state : string,
        country : string
    }
}

function printStudent(student : Student){
    console.log(`Student Name : ${student.stdName} 
                 Student Age : ${student.age} 
                 Student Course : ${student.course} 
                 Student City : ${student.address.city} 
                 Student State : ${student.address.state} 
                 Student Country : ${student.address.country}
                `);
}

let abc:Student = {
    stdName : 'John',
    age : 40,
    course : 'Java',
    address : {
        city : 'Hyderabad',
        state : 'State',
        country : 'India'
    }
};

printStudent(abc);