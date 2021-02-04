const utility = require("./FunctionalProgram/EmployeeWage");
const EmployeePayrollData = require("./FunctionalProgram/EmployeePayroll");

//EmployeeWage.js
utility.mainEmployeeWage();

//EmployeePayroll.js
console.log(EmployeePayrollData.toString());
EmployeePayrollData.id = 2;
EmployeePayrollData.name = "john";
EmployeePayrollData.salary = 4000;
console.log(EmployeePayrollData.toString());