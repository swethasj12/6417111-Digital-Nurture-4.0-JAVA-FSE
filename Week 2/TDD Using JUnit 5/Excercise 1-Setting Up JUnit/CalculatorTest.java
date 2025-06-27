import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class CalculatorTest {

    Calculator calc = new Calculator();

    @Test
    public void testAdd() {
        assertEquals(5, calc.add(2, 3));
        assertEquals(0, calc.add(-2, 2));
        assertEquals(-5, calc.add(-2, -3));
    }

    @Test
    public void testMultiply() {
        assertEquals(6, calc.multiply(2, 3));
        assertEquals(0, calc.multiply(0, 5));
        assertEquals(-6, calc.multiply(2, -3));
        assertEquals(9, calc.multiply(-3, -3));
    }

    @Test
    public void testSubtract() {
        assertEquals(2, calc.subtract(5, 3));
        assertEquals(-1, calc.subtract(2, 3));
        assertEquals(0, calc.subtract(3, 3));
    }

    @Test
    public void testDivide() {
        assertEquals(2, calc.divide(6, 3));
        assertEquals(5, calc.divide(10, 2));
    }

//    @Test(expected = ArithmeticException.class)
    public void testDivideByZero() {
        calc.divide(10, 0); 
    }

}
