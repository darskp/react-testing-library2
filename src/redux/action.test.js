import { decrement, increment, reset } from "./action";
import { DECRE, INCRE, RESET } from "./constants";


test('increment action', () => {
    const testCount = 50;
    const action = increment(testCount);
    expect(action).toEqual({ type: INCRE, payload: 51 });
});

test('decrement action', () => {
    const testCount = 50;
    const action = decrement(testCount);
    expect(action).toEqual({ type: DECRE, payload: 49 });
});

test('reset action', () => {
    const testCount = 50;
    const action = reset(testCount);
    expect(action).toEqual({ type: RESET, payload: 50 });
});
