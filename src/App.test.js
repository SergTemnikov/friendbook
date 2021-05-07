import React from 'react';
import ReactDOM from 'react-dom'
import MyBuddiezApp from './App';

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MyBuddiezApp/>, div)
  ReactDOM.unmountComponentAtNode(div)

});
