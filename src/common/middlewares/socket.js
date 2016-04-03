"use strict";

import Actions from "../actions";

export default (io) => {
  return store => next => action => {
    if (!action.source) {
      io.emit(action.type, action);
    }
    return next(action);
  }
}