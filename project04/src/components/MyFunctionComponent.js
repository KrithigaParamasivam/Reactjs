import React, { useState, useEffect } from "react";

export default function MyFunctionComponent({ color }) {
  const [mydata, setMydata] = useState({
    name: "",
    age: 0,
    count: 0,
    ts: new Date(),
    location: "init",
    color: color,
  });

  const [age, setAge] = useState(10);

  const handleButtonOnClick = () => {
    setMydata((prev) => {
      return {
        ...prev,
        count: prev.count + 1,
      };
    });

    console.log(mydata);
  };

  //useEffect(fn,[]);
  useEffect(() => {
    console.log("i a look like Constructor + component should update");
    setMydata((prev) => {
      return {
        ...prev,
        location: "Const-Look-a-Like".concat(Math.random()),
      };
    });

    return () => {
      console.log("Component will Unmount Effetct");
    };
  }, [age, mydata.count]);

  return (
    <div>
      <h1>My Function Component</h1>
      <h2>The data 1 is ....{mydata.color}</h2>
      <h2>The data 1 is ....{mydata.name}</h2>
      <h2>The data 1 is ....{age}</h2>
      <h2>The data 1 is ....{mydata.count}</h2>
      <h2>The data 1 is ....{mydata.ts.toString()}</h2>
      <h2>The data 1 is ....{mydata.location}</h2>
      <button onClick={handleButtonOnClick}>Update</button>
    </div>
  );
}