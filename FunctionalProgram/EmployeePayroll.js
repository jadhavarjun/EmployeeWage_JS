class EmployeePayrollData{
  

    get name(){ return this._name;}
    set name(name){this._name = name;}

    get id(){ return this._id;}
    set id(id){this._id = id;}

    get salary(){ return this._salary;}
    set salary(salary){this._salary = salary;}

    get gender(){ return this._gender;}
    set gender(gender){this._gender = gender;}

    get startDate(){ return this._startDate;}
    set startDate(startDate){this._startDate = startDate;}

    toString(){
        return "id="+ this.id+", name="+this.name+", salary="+this.salary+", gender="+this._gender+", startdate="+this.startDate;
    }
}

module.exports = new EmployeePayrollData();
