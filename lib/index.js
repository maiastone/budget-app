const React = require('react');
const ReactDOM = require('react-dom');
import Application from '../components/application'
const firebase = require('../firebase');


require('./styles/main.scss');


ReactDOM.render(<Application />, document.querySelector('.application'));
