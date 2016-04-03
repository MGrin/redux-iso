"use strict";

import Actions from "../actions";
import {update} from "./helpers.js";

const initialState = {
  type: null,
  source: null,
  data: null
};

export default (state = initialState, action) => {
  if (!action) {
    return state;
  }

  if (Actions.contains(action.type)) {
    return update(state, action);
  }
  
  return state;
};