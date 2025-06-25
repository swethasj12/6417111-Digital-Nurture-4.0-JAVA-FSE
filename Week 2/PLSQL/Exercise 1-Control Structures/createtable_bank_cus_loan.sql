-- Drop LOANS table if exists
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE loans CASCADE CONSTRAINTS';
EXCEPTION
  WHEN OTHERS THEN NULL;
END;
/

-- Drop CUSTOMERS table if exists
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE customers CASCADE CONSTRAINTS';
EXCEPTION
  WHEN OTHERS THEN NULL;
END;
/

-- Create CUSTOMERS table
CREATE TABLE customers (
  customer_id NUMBER PRIMARY KEY,
  age NUMBER,
  balance NUMBER,
  IsVIP VARCHAR2(5)
);

-- Create LOANS table
CREATE TABLE loans (
  loan_id NUMBER PRIMARY KEY,
  customer_id NUMBER REFERENCES customers(customer_id),
  interest_rate NUMBER,
  due_date DATE
);

-- Insert sample data into CUSTOMERS
INSERT INTO customers VALUES (1, 65, 12000, 'FALSE');
INSERT INTO customers VALUES (2, 45, 8000, 'FALSE');
INSERT INTO customers VALUES (3, 70, 5000, 'FALSE');
INSERT INTO customers VALUES (4, 30, 15000, 'FALSE');

-- Insert sample data into LOANS
INSERT INTO loans VALUES (101, 1, 10.5, SYSDATE + 15);
INSERT INTO loans VALUES (102, 2, 11.0, SYSDATE + 35);
INSERT INTO loans VALUES (103, 3, 9.0, SYSDATE + 5);
INSERT INTO loans VALUES (104, 4, 8.5, SYSDATE + 60);

COMMIT;
/
