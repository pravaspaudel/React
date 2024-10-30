import React, { useState, useEffect } from "react";
import FoodCard from "./FoodCard";

const Base_Url = "http://localhost:8000/api/data2";

const Body = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Base_Url);
        const json = await response.json();
        console.log(json);
        setData(json);
        setLoading(false);
      } catch (e) {
        setError("Unable to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="mt-[-25px] pt-10 pl-10 flex flex-wrap gap-3 text-white ">
      {data.map((item, id) => (
        <FoodCard
          key={id}
          name={item.name}
          text={item.text}
          type={item.type}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Body;
