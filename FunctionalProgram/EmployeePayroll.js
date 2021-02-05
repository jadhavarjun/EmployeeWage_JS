class EmployeePayrollData{
  

    get name(){ return this._name;}
    set name(name)
    {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name))
        this._name = name;
        else throw "Name is Incorrect";
    }

    get id(){ return this._id;}
    set id(id){
        let idRegex = RegExp("[1-9]");
        if(idRegex.test(id))
        this._id = id;
        else throw "ID is Incorrect";
    }

    get salary(){ return this._salary;}
    set salary(salary){
        let salaryRegex = RegExp("[0-9]");
        if(salaryRegex.test(salary))
        this._salary = salary;
        else throw "Salary is Incorrect";
    }

    get gender(){ return this._gender;}
    set gender(gender){
        let genderRegex = RegExp("(M|F|M/F)$");
        if(genderRegex.test(gender))
        this._gender = gender;
        else throw "Gender is Incorrect";
    }

    get startDate(){ return this._startDate;}
    set startDate(startDate){
        let startDateRegex = RegExp("[0-2][0-9][0-9][0-9][-]");
        if(startDateRegex.test(startDate))
        this._startDate = startDate;
        else throw "StartDate is Incorrect";
        
    }

    toString(){
        return "id="+ this.id+", name="+this.name+", salary="+this.salary+", gender="+this._gender+", startdate="+this.startDate;
    }
}

module.exports = new EmployeePayrollData();
