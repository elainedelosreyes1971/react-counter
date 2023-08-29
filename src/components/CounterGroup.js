import { useDispatch } from "react-redux";
import Counter from "./Counter";
import { updateCount } from "./counterSlice";

const CounterGroup = (props) => {
    // useDispatch
    const dispatch = useDispatch();

    const handleCountChange = (index, diff) => () => {
      dispatch(updateCount({index, diff}));
    };
  
    return props.counterList.map((count, index) => {
      return (
        <Counter
          key={index}
          count={count}
          increase={handleCountChange(index, 1)}
          decrease={handleCountChange(index, -1)}
        />
      );
    });
  };

export default CounterGroup;
