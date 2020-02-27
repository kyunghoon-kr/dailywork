import { createAction, handleAction } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);


// 비동기 함수 thunk

export const increaseAsync = () => dispatch => {
    setTimeout(()=> {
        dispatch(increase());
    }, 1000)
}
export const decreaseAsync = () => dispatch => {
    setTimeout(()=> {
        dispatch(decrease());
    }, 1000)
}
const initialState = {
    number : 0
}; // 상태는 꼭 객체일 필요가 없다.

const counter = function(state= initialState, action) {
    switch(action.type) {
        case INCREASE:
            return { number: state.number + 1}
        case DECREASE:
            return { number: state.number - 1}
        default: 
            return state
    }
}
export default counter;