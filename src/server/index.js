"use strict";

import express from 'express';
import io from 'socket.io';
import http from 'http';
import config, {
  Express,
  Router
} from './config';

import {createStore, applyMiddleware} from "redux";

import reducers from "./reducers";
import {socketMiddleware, loggerMiddleware} from "./middlewares";

import connectors from "./connectors";

const app = express();
const server = http.Server(app);

app.io = io.listen(server);

Express(app);
Router(app);

app.config = config;

app.store = createStore(reducers, applyMiddleware(
  socketMiddleware(app.io),
  loggerMiddleware()
));

connectors.set(app, connectors.SOCKET, 'server');

server.listen(app.config.port || 9000);