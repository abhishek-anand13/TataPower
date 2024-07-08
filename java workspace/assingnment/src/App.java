import java.util.Scanner;

public class App {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter n:");
        int n = sc.nextInt();
        int c=0;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                c++;
            }
        }
        if (c==0)
            System.out.println(n + " is prime");
        else
            System.out.println(n + " is not prime");
    }
}