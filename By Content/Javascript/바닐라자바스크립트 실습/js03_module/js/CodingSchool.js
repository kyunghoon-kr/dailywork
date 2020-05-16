// es6 class

export default class CodingSchool {
    constructor(props) {
        this.lectures = ['javascript-', 'vue.js'];
    }
    getLectures() {
        return this.lectures;
    }
    getTime() {
        return Date.now();
    }
    getCurrentHour = () => {
        return (new Date).getHours();
    }
}