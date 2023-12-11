import { decrement, increment, reset } from "./action";
import reduce from "./reducer";

  test('increment action', () => {
    const initialState = { count: 10 };
    const action = increment(initialState.count);
    const newState = reduce(initialState, action);
    expect(newState).toEqual({ count: 11 });
  });

  test('decrement action', () => {
    const initialState = { count: 10 };
    const action = decrement(initialState.count);
    const newState = reduce(initialState, action);
    expect(newState).toEqual({ count: 9 });
  });

  test('decrement action when count is 0', () => {
    const initialState = { count: 0 };
    const action = decrement(initialState.count);
    const newState = reduce(initialState, action);
    expect(newState).toEqual({ count: 0 });
  });

  test('reset action', () => {
    const initialState = { count: 8 };
    const action = reset(initialState.count);
    const newState = reduce(initialState, action);
    expect(newState).toEqual({ count: 0 });
  });

