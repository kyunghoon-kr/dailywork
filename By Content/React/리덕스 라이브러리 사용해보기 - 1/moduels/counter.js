// 액션 타입 정의

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// export는 여러개 내보냄
export const increase = () => ({type: INCREASE})
export const decrease = () => ({type: DECREASE})

const initialState = {
    number: 0
};

// 리듀서 함수 생성
// 현재 상태를 참조하여 새로운 객체를 생성 후 반환
function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            }
        case DECREASE:
            return {
                number: state.number -1
            }
        default:
            return state;
    }
}

//export default는 단 한개만 내보낼 수 있음

export default counter;