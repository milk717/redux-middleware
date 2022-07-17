const myLogger = store => next=>action=>{
    console.log(action);    //현재 액션을 출력한다
    const result = next(action);    //다음 미들웨어(혹은 리듀서에게 액션을 전달한다)

    //업데이트 이후의 상태 조회
    console.log(store.getState())

    return result;      //반환값이 dispatch(action)의 결과값이 된다.
};

export default myLogger;