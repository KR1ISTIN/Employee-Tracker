INSERT INTO department (name)
VALUES  ('Engineering'),
        ('Finance'),  
        ('Legal'),
        ('Sales'),
        ('Services');

INSERT INTO roles (title, salary, department_id)
VALUES ('Lead Engineer', 150000, 1),
       ('Software Engineer', 120000, 1),
       ('Account Manager',85000, 4),
       ('Accountant', 70000, 2),
       ('Legal Term Lead', 200000, 3),
       ('Lawyer', 250000, 3),
       ('Project Manager',110000, 5),
       ('Marketing', 75000, 5);
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Morgan', 'Wallen', 1, 'John Doe'),
        ('Kasey', 'James', 3, 'Kunal Singh'),
        ('Amber', 'Williams', 2, 'Ashley Lee'),
        ('Valerie', 'Houston', 4, 'Jarred Salme'),
        ('Sonia', 'Duffy', 5, 'Null');

         
       
