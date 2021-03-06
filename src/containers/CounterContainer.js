import Counter from "../components/Counter";
import {useDispatch, useSelector } from "react-redux";
// import {decrease, increase} from "../modules/counter";
import {increaseAsync, decreaseAsync} from '../modules/counter';

function CounterContainer() {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();

    const onIncrease = () =>{
        dispatch(increaseAsync());
    }

    const onDecrease = () =>{
        dispatch(decreaseAsync());
    }

    return(
      <div>
          <Counter
              number={number}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
          />
      </div>
    );
}

export default CounterContainer;