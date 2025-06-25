SET SERVEROUTPUT ON;
BEGIN
  -- Scenario 1
  FOR rec IN (SELECT customer_id FROM customers WHERE age > 60) LOOP
    UPDATE loans
    SET interest_rate = interest_rate - 1
    WHERE customer_id = rec.customer_id;
SELECT * FROM loans;
  END LOOP;
