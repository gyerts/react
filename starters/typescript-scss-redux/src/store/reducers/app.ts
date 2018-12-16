import { createReducer } from "redux-act";

import { actions } from '../actions';

export const counterReducer = createReducer({
  [actions.counter.increment.getType()]: (state) => state + 1,
  [actions.counter.decrement.getType()]: (state) => state - 1,
  [actions.counter.add.getType()]: (state, payload) => state + payload,
}, 0);
