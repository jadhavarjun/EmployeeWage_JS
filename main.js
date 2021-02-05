const utility = require("./FunctionalProgram/EmployeeWage");
const EmployeePayrollData = require("./FunctionalProgram/EmployeePayroll");

//EmployeeWage.js
//utility.mainEmployeeWage();

//EmployeePayroll.js
try{
EmployeePayrollData.id = 1;
EmployeePayrollData.name = "John";
EmployeePayrollData.salary = 4000;
EmployeePayrollData.gender = "M";
EmployeePayrollData._startDate = "06/02/2021";
console.log(EmployeePayrollData.toString());
}catch(e){
    console.error(e);
}