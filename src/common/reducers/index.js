"use strict";

import {combineReducers} from 'redux';

import {update} from './helpers.js';

import lastAction from "./lastAction.js";

export default combineReducers({
  lastAction
});