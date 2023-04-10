DROP DATABASE IF EXISTS Employee Tracker; --look into
CREATE DATABASE Employee Tracker;

USE Employee Tracker;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL 
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)  -- to hold department name
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id), -- holds id from roles table
    manager_id VARCHAR(30),
    --FOREIGN KEY (manager_id) REFERENCES employee(id)
)