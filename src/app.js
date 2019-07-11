import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Layout = () => {
  return (
    <div>
      <p>header</p>
      <p>footer</p>
    </div>
  );
};


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
// ReactDOM.render((
//   <Layout>
//   </Layout>
// ), document.getElementById('app'))