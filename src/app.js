import React from 'react';
import {render} from 'react-dom';

import IntroductionView from './IntroductionView.js';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <IntroductionView name="Han"/>
      </div>
      
    )
  }
}

render(<App/>, document.getElementById('app'));