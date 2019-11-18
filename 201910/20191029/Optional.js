import React from 'react';


function App() {
  const name ='리액트';
  return (
    <>
      {name === '리액트' ? (
        <h1> 리액트 맞음! </h1>
      ) : (
        <h2> 리액트 아님! </h2>
      )}
    </>
  )
}

export default App;
