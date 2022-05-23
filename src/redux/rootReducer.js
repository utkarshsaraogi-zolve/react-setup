import { combineReducers } from 'redux';

import CounterSlices from './counter/slices';

export const rootReducer = combineReducers({
    counter: CounterSlices,
});
