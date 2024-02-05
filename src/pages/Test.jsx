import React, { useEffect, useState } from "react";
import Loading from "./Loading"; // Assuming Loading component is in the same directory
import galleryData from "../galary.json"; // Import JSON data directly

const Sample = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(galleryData.galery); // Use imported data directly
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {data.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default Sample;
