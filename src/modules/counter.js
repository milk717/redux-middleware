//액션 타입 선언
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//액션 생성 함수
export const increase = () =>({type: INCREASE});
export const decrease = () =>({type: DECREASE});

//카운터 딜레이하기
export const increaseAsync = () =>dispatch => {
    setTimeout(() => dispatch(increase()),1000);
};
export const decreaseAsync = () =>dispatch => {
    setTimeout(() => dispatch(decrease()),1000);
};

//초기 상태 설정
const initialState = {
    number:0
};

//리듀서 생성
export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number+1
            };
        case DECREASE:
            return {
                number: state.number-1
            };
        default:
            return state;
    }
};
