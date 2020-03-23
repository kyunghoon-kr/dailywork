import React, { useState, Suspense } from 'react';
const SplitMePlz = React.lazy(()=> import('./SplitMePlz'));
const App = (props) => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  }
  return (
    <div>
      <p onClick={onClick}>Hello React!</p>
      <Suspense fallback={<div>loading...</div>}>
        {visible && <SplitMePlz/>}
      </Suspense>
    </div>
  );
};

export default App;