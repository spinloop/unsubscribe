#!/bin/sh

concurrently --kill-others \
  "stylus --watch src/stylesheets/app.styl -o build" \
  "node server.js" \
  "webpack --watch" \
