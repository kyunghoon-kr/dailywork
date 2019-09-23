//백준 알고리즘 5554번: 심부름 가는 길

package algorithm;

import java.util.Scanner;


public class Stopwatch {

	public static void main(String[] args) {
		int a, b , num, sum = 0;
		Scanner scanner= new Scanner(System.in);
		
		for(int i=0;i<4;i++) {
			num = scanner.nextInt();
			sum += num;
		}
		
		a = sum/60;
		b = sum - a * 60;
		
		if(a > 59)
			a = 59;
		
		System.out.println(a);
		System.out.println(b);
		
		scanner.close();
			
	}

}
