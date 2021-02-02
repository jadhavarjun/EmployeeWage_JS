class Utility {

    empCheck;
    empAttendance = () => {
        this.empCheck = Math.floor(Math.random() * 10) % 2;
    }

    mainEmployeeWage = () => {
        
        this.empAttendance();

            if (this.empCheck == 1) {
                console.log("\n * Employee Is Present..! ");
            }
            else{
                console.log("\n * Employee Is Absent..! ");
            }
    }
}

module.exports = new Utility()