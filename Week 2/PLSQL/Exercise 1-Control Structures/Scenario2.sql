SET SERVEROUTPUT ON;
-- Scenario 2
  FOR rec IN (SELECT customer_id FROM customers WHERE balance > 10000) LOOP
    UPDATE customers
    SET IsVIP = 'TRUE'
    WHERE customer_id = rec.customer_id;
  END LOOP;
SELECT * FROM customers;

