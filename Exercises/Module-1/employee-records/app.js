var employees = []

function Employee(name, jobTitle, salary){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
    this.printEmployeeForm = function(){
        // console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary, ", Status: " + this.status)
        console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`)
    }
}

var Brooke = new Employee("Brooke", "Instructor", "$65/hour")
var Taylor = new Employee("Taylor", "Instructor", "$40/hour")
Taylor.status = "Part Time"
var Olivia = new Employee("Olivia", "Instructor", "$45/hour")
Olivia.status = "Contract"

Brooke.printEmployeeForm()
Taylor.printEmployeeForm()
Olivia.printEmployeeForm()

employees.push(Brooke)
employees.push(Taylor)
employees.push(Olivia)


console.log(employees)



    