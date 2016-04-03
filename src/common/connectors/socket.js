"use strict";

import Actions from "../actions";

export default (app, source) => {
  const sockets = app.io.sockets ? app.io.sockets : app.io;

  sockets.on('connect', () => {
    Actions.map((action) => {
      sockets.on(action, (socketAction) => {
        action.source = source
        app.store.dispatch(action);
      });
    });
  });
}