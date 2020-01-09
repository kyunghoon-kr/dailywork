package ch5;

import java.time.DayOfWeek;
import java.util.*;

public class ScoreManagement {
    Map<String, Student> data = new HashMap<>();

    void getStudent() {
        Student s = new Student("201533695", "김경훈", "컴공", Arrays.asList(90, 85, 88, 87 ,92));
        Student s2 = new Student("2015336932", "김오", "컴공", Arrays.asList(91, 100, 99, 42 ,55));
        data.put("201533695", s);
        data.put("2015336932", s2);
    }
    void findStudent() {
        int sum = 0;
        Scanner scanner = new Scanner(System.in);
        System.out.print("# 성적조회 - 학번 : ");
        String id = scanner.next();
        Student s = data.get(id);
        System.out.printf("%s %s %s %f", s.getId(), s.getName(), s.getDept(), s.getSungjuk());
    }
    public static void main(String[] args) {
        ScoreManagement app = new ScoreManagement();
        app.getStudent();
        app.findStudent();
    }
}
