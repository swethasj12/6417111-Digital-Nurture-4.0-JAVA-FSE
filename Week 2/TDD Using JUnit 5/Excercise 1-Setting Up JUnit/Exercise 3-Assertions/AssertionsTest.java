package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // assertEquals
        assertEquals(5, 2 + 3, "2 + 3 should be 5");

        // assertTrue
        assertTrue(53 > 0, "53 should be true (positive)");

        // assertFalse
        assertFalse(53 < 0, "53 should not be negative");

        // assertNull
        assertNull(null, "Expected null value");

        // assertNotNull
        assertNotNull(new Object(), "Expected non-null object");
    }
}
