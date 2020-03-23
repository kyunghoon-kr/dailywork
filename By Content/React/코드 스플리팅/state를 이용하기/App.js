import React, { Component } from 'react';
import SplitMePlz from './SplitMePlz';
class App extends Component {
  state = {
    SplitMePlz : null
  };
  handleClick = async () => { // 비동기 처리
    const loadedModule = await import('./SplitMePlz');
    this.setState({
      SplitMePlz: loadedModule.default
    })
  }
  render() {
    return (
      <div>
        {SplitMePlz && <SplitMePlz/>}
      </div>
    );
  }
}

export default App;