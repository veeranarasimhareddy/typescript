/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/



/*
Create en Employee Object and prepares a Template String using
String Concatenation and Template String.
 */

let employee = {
    eName : 'John',
    eAge : 40,
    eDesg : 'Manager'
};

let strConcat = "<div style='background-color: orangered'>" +
                    "<h3>" + employee.eName + "</h3>" +
                    "<h3>" + employee.eAge + "</h3>" +
                    "<h3>" + employee.eDesg + "</h3>" +
                 "</div>";
console.log(strConcat);

document.querySelector('#container').innerHTML = strConcat;

let templateStr = `<div style="background-color: purple">
                    <h3> ${employee.eName} </h3>
                    <h3> ${employee.eAge} </h3>
                    <h3> ${employee.eDesg} </h3>
                    </div>`;

document.querySelector('#container').innerHTML = templateStr;




