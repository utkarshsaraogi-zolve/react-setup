// redux actions
import * as requestFromServer from './cruds';
import { CounterActions } from './slices';

export const getDummyDetails = (payload) => dispatch => {
    return requestFromServer.getDummyDetails(payload)
        .then(() => {
            dispatch(CounterActions.incrementByAmount({}));
        })
        .catch(error => {
            console.error(error);
        });
};