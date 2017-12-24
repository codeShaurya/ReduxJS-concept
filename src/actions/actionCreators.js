import * as action from './constants';

export function increment() {
  return {
    type: action.INCREMENT_COUNTER,
  }
}

export function decrement() {
  return {
    type: action.DECREMENT_COUNTER,
  }
}
