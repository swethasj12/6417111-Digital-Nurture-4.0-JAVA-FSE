// Logger.java
public class Logger {

    // Step 1: Private static instance
    private static Logger singleInstance;

    // Step 2: Private constructor to prevent instantiation
    private Logger() {
        System.out.println("Logger initialized.");
    }

    // Step 3: Public method to provide access to the instance
    public static Logger getInstance() {
        if (singleInstance == null) {
            singleInstance = new Logger();
        }
        return singleInstance;
    }

    // Sample logging method
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
// Main.java
public class Main {
    public static void main(String[] args) {

        // Getting Logger instance 1
        Logger logger1 = Logger.getInstance();
        logger1.log("This is the first log message.");

        // Getting Logger instance 2
        Logger logger2 = Logger.getInstance();
        logger2.log("This is the second log message.");

        // Verifying both instances are the same
        if (logger1 == logger2) {
            System.out.println("Both logger instances are the same (Singleton verified).");
        } else {
            System.out.println("Logger instances are different (Singleton failed).");
        }
    }
}
