CREATE TABLE employees (
  emp_id NUMBER PRIMARY KEY,
  name VARCHAR2(50),
  department VARCHAR2(50),
  salary NUMBER
);
INSERT INTO employees VALUES (101, 'Alice', 'Sales', 50000);
INSERT INTO employees VALUES (102, 'Bob', 'IT', 60000);
INSERT INTO employees VALUES (103, 'Charlie', 'Sales', 55000);
COMMIT;
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  dept_name IN VARCHAR2,
  bonus_percent IN NUMBER
) IS
BEGIN
  UPDATE employees
  SET salary = salary + (salary * bonus_percent / 100)
  WHERE department = dept_name;

  COMMIT;
END;
/
BEGIN
  UpdateEmployeeBonus('Sales', 10);
END;
/

SELECT * FROM employees;
