package ch5;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class HashTable {
    public static void main(String[] args) {
        Map<String, String> map = new HashMap<>();
        map.put("11081010", "Apple IPhone 11");
        map.put("12221341", "Apple IPhone X");
        map.put("15154421", "LG G10");
        map.put("17142123", "Samsung Galaxy Note 10");

        Scanner scanner = new Scanner(System.in);
        System.out.print("# 검색한 상품코드 : ");
        String code = scanner.next();
        System.out.printf("%s : %s\n", code, map.get(code));

        for(String s : map.keySet()) {
            System.out.printf("%s : %s \n", s, map.get(s));
        }
        for(Map.Entry<String, String> entry : map.entrySet()) {
            System.out.printf("%s : %s \n", entry.getKey(), entry.getValue());
        }
        for(String s : map.values()) {
            System.out.printf("%s\n", s);
        }
    }
}
