"use strict";

export const update = (state, updates) => {
  let newState = {};

  for (let key in state) {
    if (typeof updates[key] !== 'undefined') {
      newState[key] = updates[key];
    } else {
      newState[key] = state[key];
    }
  }

  return newState;
}