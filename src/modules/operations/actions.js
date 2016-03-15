import { dispatch, batch } from 'frux';
import * as ActionTypes from './action-types';

export function sendOperator(operator) {
  dispatch({ type: ActionTypes.SEND_OPERATOR, payload: operator });
}

export function inputNumber(number) {
  dispatch({ type: ActionTypes.INPUT_NUMBER, payload: number});
}

export function deleteLast() {
  dispatch({ type: ActionTypes.DELETE_LAST });
}

export function computeResult() {
  dispatch({ type: ActionTypes.COMPUTE_RESULT });
}

export function clear() {
  dispatch({ type: ActionTypes.CLEAR });
}
