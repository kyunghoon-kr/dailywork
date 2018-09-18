//엔터를 입력하지 않고도 방향키(혹은 문자열)를 입력받는 함수

#include <stdio.h>
#include <conio.h>
#include <stdlib.h>
void main()
{
	int key;
	printf("방향키를 입력하세요. 0 입력시 종료됩니다.\n");
	while (1) {
		if (kbhit()) {
			key = getch();
			switch (key)
			{
			case 224:
				key = getch();
				switch (key) {
				case 72:
					printf("방향키 위쪽이 입력되었습니다\n");
					break;
				case 80:
					printf("방향키 아래쪽이 입력되었습니다\n");
					break;
				case 75:
					printf("방향키 왼쪽이 입력되었습니다\n");
					break;
				case 77:
					printf("방향키 오른쪽이 입력되었습니다.\n");
					break;
				case 0:
					printf("프로그램을 종료합니다");
				}
				break;


			case 48:
				if (key == 48) {
					printf("프로그램을 종료합니다.\n");
					exit(0);
				}
				break;


			
				
			
			}
		}
	}
}

	
