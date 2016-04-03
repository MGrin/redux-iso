"use strict";

import socketConnector from "./socket.js";

const Connectors = {
  SOCKET: 'socket',
};

Connectors.set = (app, connector, source) => {
  if (connector === Connectors.SOCKET) {
    socketConnector(app, source);
  } else {
    throw new Error('Connector ' + connector + ' is not supported!');
  }
};

export default Connectors;