class Utility {

    EMP_RATE_PER_HOUR = 20
    NUM_OF_WORKING_DAYS = 21
    MAX_HRS_IN_MONTH = 100;
    IS_FULL_TIME = 1;
    IS_PART_TIME = 2;
    EMP_HR = 0;
    DAY = 0;

    empCheck = 0
    empWage = 0
    totalWage = 0
    totalEmpHrs = 0
    totalWorkingDays = 0

    empAttendance() {

        this.empCheck = Math.floor(Math.random() * 10) % 3;
        return this.empCheck;
    }

    empDailyWage = () => {
        this.empWage = this.EMP_HR * this.EMP_RATE_PER_HOUR;
        return this.empWage;
    }

    getWorkingHrs = () => {

        switch (this.empCheck) {

            case this.IS_PART_TIME:
                this.EMP_HR = 8
                break;

            case this.IS_FULL_TIME:
                this.EMP_HR = 4
                break;

            default:
                this.EMP_HR = 0
        }
        return this.EMP_HR
    }

    mainEmployeeWage = () => {

        let empDailyWage = new Array();

        while (this.totalEmpHrs <= this.MAX_HRS_IN_MONTH && this.totalWorkingDays < this.NUM_OF_WORKING_DAYS) {
            this.totalWorkingDays++;

            this.empAttendance();
            this.EMP_HR = this.getWorkingHrs(this.empCheck);
            this.totalEmpHrs += this.EMP_HR;
            empDailyWage.push(this.empDailyWage(this.EMP_HR));
        }
        //forEach
        let totalWage = 0;
        empDailyWage.forEach((arrayTotalWage) => {
            totalWage += arrayTotalWage;
        })
        //map
        console.log("print day and daily wages using map:");
        empDailyWage.map((element, index) => {
            console.log("Day: ", index + 1);
            console.log("Daily Wage: ", element);
        })
        //filter Full Time Wage
        let temp = empDailyWage.filter((element) => element == 160)
        console.log("Find Full Day Wage Using Filter: ", temp);

        //find Function
        function findFun(dayWage) {
            return dayWage == 160;
        }
        console.log("Find First Full Time Wage Occurence: ", empDailyWage.find(findFun));

        //filter Part Time
        let partTimeWage = empDailyWage.filter((element) => element==80)
        console.log("Find Part Day Wage Using Filter: ", partTimeWage);

        console.log("Total Employee Wage Using forEach: " + totalWage);

    }
}

module.exports = new Utility()