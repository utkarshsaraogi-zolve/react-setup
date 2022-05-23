// absolute imports
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// external imports

// in-app imports

// redux imports
import { CounterActions } from '../../redux/counter/slices';

export default function Counter() {
    const dispatch = useDispatch();

    const count = useSelector(state => state.counter.value);
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;

    return (
        <div>
            <div>
                <button onClick={() => dispatch(CounterActions.decrement())}>
                    -
                </button>
                <span>{count}</span>
                <button onClick={() => dispatch(CounterActions.increment())}>
                    +
                </button>
            </div>
            <div>
                <input
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button onClick={() => dispatch(CounterActions.incrementByAmount(incrementValue))}>
                    Add Amount
                </button>
            </div>
        </div>
    );
}
