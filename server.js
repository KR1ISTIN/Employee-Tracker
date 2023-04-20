const inquirer = require('inquirer');
const {db} = require('./config.js');
const {mainQ, roles, newEmployee, newDepartment,updateR} = require('./questions.js')
const {Department, Employee, UpdateRole} = require('./classes.js')

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
            quit()
        }
    })
};

// added new role to table
function addRole(){
    inquirer.prompt(roles).then((data) => {
        const newRole = data.roleTitle;
        const salary = data.salary;
        const department = data.department;
        const addRole = new Department(newRole, salary, department);
        addRole.render();
        // db.query('SELECT * FROM roles;', (err, res) => { // checking to see if the new role was actually added after been modified
        //     if (err) throw error;
            //console.table(res);
            questions();
        })
      
    //})
 
};

function addEmployee(){
    inquirer.prompt(newEmployee).then ((data) => {
        const firstName = data.firstName;
        const lastName = data.lastName;
        const role = data.role;
        const manager = data.manager;
        const newEmployee = new Employee(firstName, lastName, role, manager);
        newEmployee.render()
        // db.query('SELECT * FROM employee;', (err, res) => { // checking to see if the new employee was actually added after been modified
        //     if (err) throw error;
            //console.table(res);
            questions();
        //})

    })
};

//adding a new department to table
function addDepartment(){
    inquirer.prompt(newDepartment).then((data) => {
        const department = data.newDepartment;
        db.query('INSERT INTO department (department) VALUES (?);', department, (err, res) => { // adds new department to table
            if (err) throw error;
            //  db.query('SELECT * FROM department;', (err, res) => { // checking to see if the new department was actually added after been modified
            //      if (err) throw error;
            //     console.table(res);
                questions();
        })
           
    })
  
};


function updateRole(){
    inquirer.prompt(updateR).then((data) => {
        const name = data.updateEmployee;
        const role = data.updateRole;
        const text = name
        const newText = text.split(" ") 
        const first_name = newText[0]
        const last_name = newText[1]
        const nowUpdated = new UpdateRole(first_name, last_name, role)
        nowUpdated.render()
        // db.query('SELECT * FROM employee;', (err, res) => { // checking to see if the employee's role was updated 
        //     if (err) throw error;
            //console.table(res);
            questions();
       // })
    })

}
//view roles only
const viewRoles = () => {
    db.query("SELECT * FROM roles;", (err, res) => {
        if (err) throw error;
        console.table(res);
        questions();
    });
  };


// view only department table
const viewDepartment = () => {
    db.query('SELECT * FROM department;', (err, res) => {
        if (err) throw error;
        console.table(res);
        questions();
});
};

//view the entire employee table
const viewEmployees = () => {
    db.query('SELECT employee.id AS id, employee.first_name AS first_name, employee.last_name AS last_name, employee.manager_id AS manager, roles.title AS job_title, roles.salary AS salary, department.department AS department FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id;', (err, res) => {
        if (err) throw error;
        console.table(res);
        questions();
    })
};



const quit = () => {
    process.exit(0)
}


questions();



