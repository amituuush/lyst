const React = require('react');
const ReactDOM = require('react-dom');
const ToDoListContainer = require('./todo');
const less = require('./style.less');


ReactDOM.render(<ToDoListContainer />, document.getElementById('content'));
