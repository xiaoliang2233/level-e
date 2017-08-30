import React from 'react';
import App from './app.jsx';
import {render} from 'react-dom';

main();

function main() {
  render(<App/>, document.getElementById('app-for-react'));
}