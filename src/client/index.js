"use strict";

import React from "react";

import {render} from 'react-dom';
import socket from 'socket.io-client';

import {createStore, applyMiddleware} from "redux";

import {Provider} from 'react-redux';

import reducers from "./reducers";
import {socketMiddleware, loggerMiddleware} from "./middlewares";

import connectors from "./connectors";

import App from "./components/app.js";

const app = {};

app.io = socket();

app.store = createStore(reducers, applyMiddleware(
  socketMiddleware(app.io),
  loggerMiddleware()
));

connectors.set(app, connectors.SOCKET, 'client');

render(
  <Provider store={app.store}>
    <App />
  </Provider>,
  document.getElementById('app')
);