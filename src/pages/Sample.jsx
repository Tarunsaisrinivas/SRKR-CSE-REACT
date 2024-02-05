import React, { useEffect,useState } from "react";
import Loading from "./Loading";
const Sample = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {setData(json);setLoading(false); });
  },[]);
  return (
    <>
    {loading ? (
        <Loading />
    ):(
        <ul className="list-disc list-inside">
        {data.map((item) => (
            <div>
              <li key={item.id}>{item.title}</li>
            </div>
          ))}
          </ul>
          )
    
}

    </>
  );
};

export default Sample;
