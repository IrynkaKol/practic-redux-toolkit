import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/myValue/Slice';

export const Layout = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);
  console.log(value);
  return (
    <div>
      {value}
      <button onClick={() => dispatch(increment(100))}>Increment</button>

      <button onClick={() => dispatch(decrement(100))}>Decrement</button>
    </div>
  );
};
