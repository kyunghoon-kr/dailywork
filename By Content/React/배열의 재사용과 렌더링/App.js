import React, { useState } from 'react';
import Item from './Item';

const App = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "월"
    },
    {
      id: 2,
      name: "화"
    }
  ])






  const onClick = () => {
    setData(
      data.map(i=> i.id===1 ? {...i, name:"하이"} : i )
    )
    console.log('onClick 호출');
  }



  



  const onRemove = () => {
    setData(
      data.filter(i=> i.name!=="월")
    );
    console.log('onRemove 호출')
  }

  return (
    <div>
      {/* {data.map(i => <p key={i.id}>{i.name}</p>)} */}

      {data.map(i => <Item data={i} key={i.id}>{i.name}</Item>)}

      <button onClick={onClick}>수정</button>
      <button onClick={onRemove}>삭제</button>
    </div>
  );
};

export default App;


