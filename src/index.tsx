import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Style from './index.module.scss';

const render = () => {
  ReactDOM.render(
    <div>
      <div className={Style.test}>123456</div>
    </div>,
    document.querySelector('#app'),
  );
};

render();
