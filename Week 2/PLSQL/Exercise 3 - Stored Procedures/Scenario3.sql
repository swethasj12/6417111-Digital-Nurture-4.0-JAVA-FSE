CREATE OR REPLACE PROCEDURE TransferFunds (
  from_account IN NUMBER,
  to_account IN NUMBER,
  amount IN NUMBER
) IS
  insufficient_balance EXCEPTION;
  current_balance NUMBER;
BEGIN
  -- Get current balance of source account
  SELECT balance INTO current_balance FROM accounts WHERE account_id = from_account;

  -- Check sufficient balance
  IF current_balance < amount THEN
    RAISE insufficient_balance;
  END IF;

  -- Deduct from source
  UPDATE accounts
  SET balance = balance - amount
  WHERE account_id = from_account;

  -- Add to destination
  UPDATE accounts
  SET balance = balance + amount
  WHERE account_id = to_account;

  COMMIT;

EXCEPTION
  WHEN insufficient_balance THEN
    DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient funds.');
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Transfer failed: ' || SQLERRM);
END;
/
BEGIN
  TransferFunds(1, 2, 500);
END;
/
SELECT * FROM accounts;
