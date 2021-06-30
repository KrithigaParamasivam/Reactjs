import React, { useState,useEffect } from "react";

export default function MyFuntionaComponent({color}) {
  const [data, setData] = useState({
    name: "PettaiVellan",
    ts: new Date(),
    count: 0
   });

  const [age, setAge] = useState(10);

  const handleButtonClick = ()=> {
    setData((prev)=>{
          return {
              ...prev,
              count:prev.count+1
          }
      });

      setAge(Math.random()*1000);
  }

  useEffect(()=>{
      console.log("i am like a constructor=" + age);
      return () => { console.log("componentWillUnmount effect"); }
  },[age])

  return (
    <div>
        <h1 style={{ 
                color:color
                }}>My Function Component</h1>
      <div>
        <h1>
          the data 1 is -- {data.name}
        </h1>
        <h1>the data 1 is -- {data.ts.toString()}</h1>
        <h1>the data 1 is -- {data.count}</h1>
        <h1>the data 1 is -- {age}</h1>
        <button onClick={handleButtonClick}>Add</button>
      </div>
    </div>
  );
}