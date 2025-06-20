import java.util.*;

public class Forecast {
    public static void main(String[] args) {
        double amount;
        double rate;
        int years;
        try (Scanner s = new Scanner(System.in)) {
            System.out.println("Enter the Amount: ");
            amount = s.nextDouble();
            System.out.println("Enter the Rate of growth (e.g., 0.05 for 5%): ");
            rate = s.nextDouble();
            System.out.println("Enter the number of years: ");
            years = s.nextInt();
        }

        double forecast = calcForecast(amount, years, rate);
        System.out.printf("The Forecasted amount will be: Rs%.2f\n", forecast);
    }

    public static double calcForecast(double val, int years, double rate) {
        if (years == 0) return val;
        return calcForecast(val, years - 1, rate) * (1 + rate);
    }
}
