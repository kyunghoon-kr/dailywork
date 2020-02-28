import React, { useEffect, useState } from 'react';
import axios from "axios";
import * as api from './api';
const App = (props) => {
  
  const [data, setData] = useState(null);

  useEffect(()=> {
    const fetchData = async () => {
      const username = "major91";
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/events`);
        console.log(response.data);
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data}
    </div>
  );
};

export default App;