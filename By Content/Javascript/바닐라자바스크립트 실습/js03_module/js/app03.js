// import log,{getTime,getCurrentHour, MyLogger} from './myLogger.js';

import CodingSchool from './CodingSchool.js';
import _ from './utility.js';

// <div>태그의 root id에 접근해서 출력
const root = document.querySelector("#root");
root.innerHTML = `<p>Hello World</p>`;
// myLogger 것을 사용하는 부분!! 값을 간단하게 출력해보자.
_.log("my first test data!!");

const cs = new CodingSchool();
_.log(`Lectures = ${cs.getLectures()}`)
_.log(cs.getTime(), cs.getCurrentHour())