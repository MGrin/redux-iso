'use strict';
import express from "express";

export default (app) => {
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/../views');

  app.use(express.static(__dirname + '/../../../dist/client/'));
};