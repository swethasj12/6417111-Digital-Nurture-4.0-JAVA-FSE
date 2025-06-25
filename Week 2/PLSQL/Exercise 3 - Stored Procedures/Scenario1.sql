CREATE TABLE accounts (
  account_id NUMBER PRIMARY KEY,
  account_type VARCHAR2(20),
  balance NUMBER
);
INSERT INTO accounts VALUES (1, 'savings', 1000);
INSERT INTO accounts VALUES (2, 'current', 2000);
INSERT INTO accounts VALUES (3, 'savings', 3000);
COMMIT;
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  UPDATE accounts
  SET balance = balance + (balance * 0.01)
  WHERE account_type = 'savings';
  
  COMMIT;
END;
/

SELECT * FROM accounts;

