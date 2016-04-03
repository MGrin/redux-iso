"use strict";

export default (app) => {
  app.route('/')
    .get((req, res) => {
      return res.render("index");
    });
}