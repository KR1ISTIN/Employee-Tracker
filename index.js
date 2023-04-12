const inquirer = require('inquirer');
//const mysql = require('mysql2');
const {db} = require('./config.js');
const {mainQ, roles, newEmployee, newDepartment,updateR} = require('./questions.js')

const questions = () => {
    inquirer.prompt(mainQ).then((data) => {
        const optionSelected = data.options;
        if(optionSelected === 'View all departments') {
            viewDepartment()
        } else if(optionSelected === 'View all roles') {
            viewRoles()
        } else if(optionSelected === 'View all employees') {
            viewEmployees();
        } else if(optionSelected === 'Add a department') {
            addDepartment()
        } else if(optionSelected === 'Add a role') {
            addRole()
        } else if(optionSelected === 'Add an employee') {
            addEmployee()
        } else if(optionSelected === 'Update an employee role') {
            updateRole()
        } else if(optionSelected === 'Quit') {

        }
    })
};

function addRole(){
    inquirer.prompt(roles)
};

function addEmployee(){
    inquirer.prompt(newEmployee).then ((data) => {
        console.log('added')
    })
};

function addDepartment(){
    inquirer.prompt(newDepartment).then((data) => {
        const department = data.newDepartment;
        console.log(department)
        db.query('INSERT INTO department (name) VALUES (?);', department, (err, res) => {
            if (err) throw error;
            db.query('SELECT * FROM department;', (err, res) => {
                if (err) throw error;
                console.table(res);
                questions();
            })
           
        });
        
    })
};


function updateRole(){
    inquirer.prompt(updateR)
}


const viewRoles = () => {
    db.query("SELECT * FROM roles;", (err, res) => {
        if (err) throw error;
        console.table(res);
        questions();
    });
  };


const viewDepartment = () => {
    db.query('SELECT * FROM department;', (err, res) => {
        if (err) throw error;
        console.table(res);
        questions();
});
}

const viewEmployees = () => {
    db.query('SELECT * FROM department JOIN roles ON department.id = roles.department_id JOIN employee ON roles.id = employee.role_id;', (err, res) => {
        if (err) throw error;
        console.table(res);
        questions();
});
}


questions()



