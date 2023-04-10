const inquirer = require('inquirer');
//const {con} = require('/config.js');
const {mainQ, roles, newEmployee, newDepartment,updateR} = require('./questions.js')

function questions(){
    inquirer.prompt(mainQ).then((data) => {
        const optionSelected = data.options;
        if(optionSelected === 'View all departments') {

        } else if(optionSelected === 'View all roles') {

        } else if(optionSelected === 'View all employees') {

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
        // let firstName = data.firstName;
        // let lastName = data.lastName;
        // let fullName = firstName + " " + lastName;
        // const namesArray = ['Morgan Wallen', 'Kasey James', 'Amber Williams', 'Valerie Houston', 'Sonia Duffy'];
        // if (!namesArray.includes(fullName)) { 
        //     namesArray.push(fullName);
        // }
        // return namesArray;
    })
};

function addDepartment(){
    inquirer.prompt(newDepartment).then((data) => {
        const department = data.newDepartment;
        if(department) {
            questions()
        }
    })
};

function updateRole(){
    inquirer.prompt(updateR)
}

questions()



