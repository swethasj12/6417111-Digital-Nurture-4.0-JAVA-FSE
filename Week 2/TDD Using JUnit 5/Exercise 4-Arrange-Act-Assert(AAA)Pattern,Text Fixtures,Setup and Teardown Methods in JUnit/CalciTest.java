package com.example;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

public class CalciTest {

    private Calci calci;

    // Setup method (runs before each test)
    @BeforeEach
    public void setUp() {
        System.out.println("Setting up...");
        calci = new Calci();
    }

    // Teardown method (runs after each test)
    @AfterEach
    public void tearDown() {
        System.out.println("Cleaning up...");
        calci = null;
    }

    @Test
    public void testAddition() {
        // Arrange
        int a = 10;
        int b = 5;

        // Act
        int result = calci.add(a, b);

        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testSubtraction() {
        // Arrange
        int a = 10;
        int b = 5;

        // Act
        int result = calci.subtract(a, b);

        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testMultiplication() {
        // Arrange
        int a = 4;
        int b = 3;

        // Act
        int result = calci.multiply(a, b);

        // Assert
        assertEquals(12, result);
    }

    @Test
    public void testDivision() {
        // Arrange
        int a = 10;
        int b = 2;

        // Act
        int result = calci.divide(a, b);

        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testDivisionByZero() {
        // Arrange
        int a = 10;
        int b = 0;

        // Act & Assert
        assertThrows(IllegalArgumentException.class, () -> calci.divide(a, b));
    }
}
