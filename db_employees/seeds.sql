INSERT INTO department (id, name)
VALUES (1, 'Engineering'),
        (2, 'Finance')  
        (3, 'Legal'),
        (4, 'Sales'),
        (5, 'Services');

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, 'Lead Engineer', 150000, 1),
       (2, 'Software Engineer', 120000, 1),
       (3, 'Account Manager',85000, 4),
       (4, 'Accountant', 70000, 2),
       (5, 'Legal Term Lead', 200000, 3),
       (6, 'Lawyer', 250000, 3),
       (7,'Project Manager',110000, 5),
       (8, 'Marketing', 75000, 5);
       

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES  (1, 'Morgan', 'Wallen', 1, 'John Doe'),
        (2, 'Kasey', 'James', 3, 'Kunal Singh'),
        (3, 'Amber', 'Williams', 2, 'Ashley Lee'),
        (4, 'Valerie', 'Houston', 4, 'Jarred Salme'),
        (5, 'Sonia', 'Duffy', 5, 'Null'),

         
       
