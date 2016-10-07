#!/bin/sh

concurrently --kill-others \
  "stylus --watch src/stylesheets/app.styl -o build" \
  "webpack-dev-server" \
  "webpack --watch" \
