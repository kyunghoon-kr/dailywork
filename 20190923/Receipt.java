//백준 알고리즘 5565번: 영수증
package algorithm;

import java.util.Scanner;


public class Receipt {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int sum = 0;
		
		int all_cost = scanner.nextInt();
		for(int i=0;i<9;i++) {
			sum += scanner.nextInt();
		}
		
		System.out.println(all_cost - sum);
		scanner.close();
	}

}
