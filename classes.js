const {db} = require('./config.js');


class Department {
    constructor(title, salary, department) {
        this.title = title;
        this.salary = salary;
        this.department = department;
    }
    render() {
        if(this.department === 'Engineering') {
            this.department = 1;
        } else if (this.department === 'Finance') {
            this.department = 2;
        } else if (this.department === 'Legal') {
            this.department = 3;
        } else if (this.department === 'Sales') {
            this.department = 4;
        } else if (this.department === 'Services') {
            this.department = 5;
        }  else if (this.department === 'TBD') {
            this.department = 6;
        }
        return  db.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?);', [this.title, this.salary, this.department], (err) => {
            if (err) throw error;
        })
    }
};

class Employee {
    constructor(firstName, lastName, role, manager) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.manager = manager;
    }
    render() {
        if(this.role === 'Lead Engineer') {
            this.role = 1;
        } else if (this.role === 'Software Engineer') {
            this.role = 2;
        } else if (this.role === 'Account Manager') {
            this.role= 3;
        } else if (this.role === 'Accountant') {
            this.role = 4;
        } else if (this.role === 'Legal Term Lead') {
            this.role = 5;
        }  else if (this.role === 'Lawyer') {
            this.role = 6;
        } else if (this.role === 'Project Manager') {
            this.role = 7;
        } else if (this.role === 'Marketing') {
            this.role = 8;
        }
        return  db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);', [this.firstName, this.lastName, this.role, this.manager], (err) => {
            if(err) throw error;
        })
    }
};
module.exports ={
    Department,
    Employee
}