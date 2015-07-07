/* jshint node: true, esnext: true */
"use strict";

var React = require('react');
require('../node_modules/normalize.css/normalize.css');

var Root = require('../examples/Root');


React.render(
  React.createElement(Root),
  document.getElementById('root')
);
