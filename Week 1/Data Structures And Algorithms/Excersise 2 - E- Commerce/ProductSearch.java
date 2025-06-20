public class Product {
    public int productId;
    public String productName;
    public String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public String toString() {
        return productId + " - " + productName + " [" + category + "]";
    }
}
import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class ProductSearch {

    // Linear Search
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.productId == targetId) {
                return p;
            }
        }
        return null;
    }

    // Binary Search (array must be sorted)
    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(203, "T-Shirt", "Fashion"),
                new Product(302, "Book", "Stationery"),
                new Product(105, "Phone", "Electronics"),
                new Product(110, "Shoes", "Fashion")
            };
            
            // Sort the array for binary search
            Arrays.sort(products, Comparator.comparingInt(p -> p.productId));
            
            System.out.print("Enter Product ID to search: ");
            int searchId = scanner.nextInt();
            
            System.out.println("\nLinear Search Result:");
            Product result1 = linearSearch(products, searchId);
            System.out.println(result1 != null ? result1 : "Product not found");
            
            System.out.println("\nBinary Search Result:");
            Product result2 = binarySearch(products, searchId);
            System.out.println(result2 != null ? result2 : "Product not found");
        }
    }
}
