import React, { useEffect, useState } from "react";

const Base_Url = "http://localhost:8000/api/data";

const FoodCard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async () => {
      try {
        const response = await fetch(Base_Url);
        const json = response.json();
        console.log(json);
        setdata(json);
        setLoading(false);
      } catch (e) {
        setError("unable to fetch data");
      }
    };
  }, []);

  if (loading) return <div>loading ... </div>;
  if (error) return <div>{error}</div>;

  return <div></div>;
};

export default FoodCard;
