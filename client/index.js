const React = require('react');
const ReactDOM = require('react-dom');
const ToDoListContainer = require('./components/ToDoListContainer/ToDoListContainer');
const less = require('./style.less');
require('./store');


ReactDOM.render(<ToDoListContainer />, document.getElementById('content'));
