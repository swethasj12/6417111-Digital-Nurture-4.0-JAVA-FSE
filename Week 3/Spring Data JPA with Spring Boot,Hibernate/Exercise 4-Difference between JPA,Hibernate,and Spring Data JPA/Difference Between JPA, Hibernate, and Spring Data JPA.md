
# 🧪 Hands-On 4: Difference Between JPA, Hibernate, and Spring Data JPA

This hands-on exercise demonstrates the key differences between **JPA**, **Hibernate**, and **Spring Data JPA** through practical examples and code snippets. It focuses on how Spring Data JPA simplifies database interaction by abstracting away boilerplate code.

---

## 📚 Overview

| Technology         | Description |
|--------------------|-------------|
| **JPA**            | Java Persistence API - a specification (interface only) to manage relational data. |
| **Hibernate**      | An ORM framework and a concrete implementation of the JPA specification. |
| **Spring Data JPA**| A Spring project that builds on JPA to reduce boilerplate code and simplify data access layers. |

---

## 🔁 Code Comparison

### ✅ Hibernate Example
```java
public Integer addEmployee(Employee employee) {
    Session session = factory.openSession();  // 1
    Transaction tx = null;
    Integer employeeID = null;

    try {
        tx = session.beginTransaction();      // 2
        employeeID = (Integer) session.save(employee);  // 3
        tx.commit();                          // 4
    } catch (HibernateException e) {
        if (tx != null) tx.rollback();        // 5
        e.printStackTrace();
    } finally {
        session.close();                      // 6
    }
    return employeeID;
}
```

---

### 🔍 Explanation of Each Line

| Line | Code | Description |
|------|------|-------------|
| 1 | `session = factory.openSession();` | Opens a new session to interact with the DB. |
| 2 | `tx = session.beginTransaction();` | Begins a DB transaction manually. |
| 3 | `session.save(employee);` | Saves the employee object and returns its ID. |
| 4 | `tx.commit();` | Commits the transaction to persist changes. |
| 5 | `tx.rollback();` | Rolls back if an exception occurs. |
| 6 | `session.close();` | Closes the session to free resources. |

---

### 🔄 Key Differences: Hibernate vs Spring Data JPA

| Aspect | Hibernate | Spring Data JPA |
|--------|-----------|-----------------|
| **Boilerplate Code** | Requires explicit code for session, transaction, and exception handling. | All of this is handled internally by Spring. |
| **Repository Pattern** | Developer writes their own DAO or repository classes. | Just extend `JpaRepository`, no implementation needed. |
| **Focus** | More control but requires handling low-level operations. | Focuses on high-level business logic with less effort. |
