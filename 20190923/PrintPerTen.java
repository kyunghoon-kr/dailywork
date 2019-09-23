package algorithm;
import java.util.Scanner;
public class PrintPerTen {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String a = scanner.nextLine();
		int sum = 0;
		for (int i=0;i<a.length();i++) {
			sum += 1;
			System.out.print(a.charAt(i));
			if(sum%10 == 0)
				System.out.println();
		}

	}

}
