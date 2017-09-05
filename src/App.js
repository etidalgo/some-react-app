import React, { Component } from 'react';
import ReactReorderable from 'react-reorderable';
import logo from './logo.svg';
import './App.css';

function addRow(data) {
  var el = document.getElementById('events');
  el.innerHTML += '<br>' + data;
}

function getLabel(node) {
  return node.props.children[1].props.children
}

class App extends Component {
  render() {
    return (
      <ReactReorderable 
        handle='.draggable-handle'
        mode='grid'
        onDragStart= { function (data) {
          addRow('Drag start: ' + getLabel(data.props.children));
        }}
        onDrop={function (data) {
          addRow('Drop: ' + data.map(getLabel).join(', '));
        }}
        onChange={function (data) {
          addRow('Change: ' + data.map(getLabel).join(', '));
        }}
      >
      <div
        className='draggable-element'>
        <div className='draggable-handle'>1</div>
      </div>
      <div
        className='draggable-element'>
        <div className='draggable-handle'>2</div>
      </div>
    </ReactReorderable>
    );
  }
}

export default App;
