"use strict";

const Actions = {

};
export default Actions;

Actions._flatt = (obj, storage) => {
  for (let k in obj) {
    if (typeof obj[k] === 'object') {
      Actions._flatt(obj[k], storage);
    } else {
      storage.push(obj[k]);
    }
  }
};

Actions.map = (fn) => {
  if (!Actions.flatted) {
    Actions.flatted = [];
    Actions._flatt(Actions, Actions.flatted);
  }

  Actions.flatted.forEach(fn);
};

Actions.contains = (actionType) => {
  if (!Actions.flatted) {
    Actions.flatted = [];
    Actions._flatt(Actions, Actions.flatted);
  }

  return Actions.flatted.indexOf(actionType) !== -1;
}