const utility = require("./FunctionalProgram/EmployeeWage");
const EmployeePayrollData = require("./FunctionalProgram/EmployeePayroll");

//EmployeeWage.js
//utility.mainEmployeeWage();

//EmployeePayroll.js
EmployeePayrollData.id = 1;
try{
EmployeePayrollData.name = "John";
}catch(e){
    console.error(e);
}
EmployeePayrollData.salary = 4000;
EmployeePayrollData.gender = "Male";
EmployeePayrollData._startDate = "06/02/2021";
console.log(EmployeePayrollData.toString());
