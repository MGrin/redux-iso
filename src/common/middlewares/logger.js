"use strict";

export default () => {
  return store => next => action => {
    console.log(action);
    return next(action);
  };
};