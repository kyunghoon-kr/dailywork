/**
 * 외부에서 사용할 수 있도록 할 예정이다.
 * export를 사용할겁니다.
 * export를 붙이는 것은 다른데서 사용할 수 있도록 하는 것
 * export가 안되어 있으면 다른데서 여기의 함수를 사용하지 못함.
 */
export default function log(data){
    console.log(data);
}
export const getTime = () => {
    return Date.now();
}
export const getCurrentHour = () => {
    return (new Date).getHours();
}

export class MyLogger {
    constructor(props) {
        this.lectures = ['javascript-', 'vue.js'];
    }
    getLectures() {
        return this.lectures;
    }
    getTime() {
        return Date.now();
    }
}