class Utility {

    EMP_RATE_PER_HOUR = 20;
    NUM_OF_WORKING_DAYS = 20;
    EMP_HR = 0;
    DAY = 0;
    TOTAL_EMP_HR=0;

    empCheck=0;
    empWage=0;
    totalWage=0;

    mainEmployeeWage = () => {

        for (this.DAY = 0; this.DAY <= this.NUM_OF_WORKING_DAYS; this.DAY++) {
            
            this.empCheck = Math.floor(Math.random()*2);
            console.log(this.empCheck);
            switch(this.empCheck) {
                
                case 0 :
                        this.EMP_HR = 8
                        this.TOTAL_EMP_HR+=this.EMP_HR;
                        break;
                case 1:
                        this.EMP_HR = 4   
                        this.TOTAL_EMP_HR+=this.EMP_HR;
                        break;
                    
                default: 
                    this.EMP_HR = 0
                
            }
       
     }
        
        this.empWage = this.TOTAL_EMP_HR * this.EMP_RATE_PER_HOUR;
        this.totalWage = this.totalWage + this.empWage;
        console.log("The Monthly Employee Wage Is : "+this.totalWage);
            
    }
}

module.exports = new Utility()
