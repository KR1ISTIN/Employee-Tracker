
const mainQ = [
    {
        type: 'list',
        message: 'Select one of the following:',
        name: 'options',
        choices:['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit']
    },
];

const roles = [
    {
        type:'input',
        message: 'What is the role to be added?',
        name:'roleTitle',
    },
    {
        type:'input',
        message: 'What is the salary of this role?',
        name:'salary',
    },
    {
        type:'list',
        message: 'What department does this role belong to?',
        name:'department',
        choices:['Engineering', 'Finance', 'Legal', 'Sales', 'Services', 'TBD']
    }
];

const newEmployee = [
    {
        type:'input',
        message: "Enter employee's first name:",
        name:'firstName',
    },
    {
        type:'input',
        message: "Enter employee's last name:",
        name:'lastName',
    },
    {
        type:'list',
        message: "What is the employee's role?",
        name:'role',
        choices:['Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Term Lead', 'Lawyer', 'Project Manager', 'Marketing']
    },
    {
        type:'list',
        message: "Who is the employee's manager?",
        name:'manager',
        choices: ['None','John Doe', 'Kunal Singh', 'Ashley Lee', 'Jarred Salme' ]
    },
];

const newDepartment = [
    {
        type:'input',
        message: 'Add name of department:',
        name:'newDepartment',
    },  
];

const updateR =[
    {
        type:'list',
        message: 'Which employee did you want to update for their role?',
        name:'updateEmployee',
        choices: ['Morgan Wallen', 'Kasey James', 'Amber Williams', 'Valerie Houston', 'Sonia Duffy']
    },  
    {
        type:'list',
        message: 'Which role would you like to update for the selected employee from previous question?',
        name:'updateRole',
        choices:['Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Term Lead', 'Lawyer', 'Project Manager', "Marketing"]
    },  
];

module.exports = {
    mainQ,
    roles,
    newEmployee,
    newDepartment,
    updateR
};