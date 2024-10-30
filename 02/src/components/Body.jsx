import React, { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import Navigation from "./Navigation"; // Import Navigation

const Base_Url = "http://localhost:8000/api/data2";

const Body = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Base_Url);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (e) {
        setError("Unable to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to handle search input
  const handleSearch = (query) => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Navigation onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
      <div className="mt-[-25px] pt-10 md:pl-10 p-2 flex flex-wrap gap-3 text-white">
        {filteredData.map((item, id) => (
          <FoodCard
            key={id}
            name={item.name}
            text={item.text}
            type={item.type}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
