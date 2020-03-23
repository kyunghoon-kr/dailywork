import React from 'react';
import notify from './notify';
const App = (props) => {
  const onClick = () => {
    // notify();
    import('./notify').then(result => result.default()); // Promise로 코드 비동기 로딩
  }
  return (
    <div>
      <p onClick={onClick}>Hello React!</p>
    </div>
  );
};

export default App;