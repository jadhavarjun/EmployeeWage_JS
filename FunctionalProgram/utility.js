class Utility {

    EMP_RATE_PER_HOUR = 20;
    IS_FULL_TIME = 1;
    IS_PART_TIME = 2;
    EMP_HR = 0;
    
    empCheck

    empAttendance() {

        this.empCheck = Math.floor(Math.random() * 10) % 3;
        return this.empCheck;
    }

    mainEmployeeWage = () => {
        
        this.empAttendance();

        switch(this.empCheck) {
            
            case this.IS_FULL_TIME:
                    this.EMP_HR = 8
                    break;
            
            case this.IS_PART_TIME:
                    this.EMP_HR = 4    
                    break;
                
            default: 
	            console.log("Employee Is Absent..!!");
        }
        //this.empDailyWage();
        let empWage = this.EMP_HR * this.EMP_RATE_PER_HOUR;
        console.log("\n * The Daily Eamployee Wage Is : "+empWage);
    }
}

module.exports = new Utility()
