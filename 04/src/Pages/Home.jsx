import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/slices/CartSlice";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(); // Initialize dispatch

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const datajson = await response.json();
        setData(datajson);
        setLoading(false);
      } catch (error) {
        console.log(`error in fetching the data ${error}`);
        setLoading(false);
      }
    };

    fetchdata();
  }, []);

  // Define handleAddtoCart
  const handleAddtoCart = (item) => {
    dispatch(
      addItem({
        id: item.id,
        name: item.title,
        price: item.price,
      })
    );
  };

  if (loading) {
    return (
      <div className="grid place-content-center h-screen">
        <Circles height={80} width={80} color="#4fa94d" ariaLabel="loading" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, id) => (
          <div
            key={id}
            className="border border-gray-300 rounded-lg overflow-hidden hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-contain bg-gray-100"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold truncate mb-2">
                {item.title}
              </h2>
              <p className="mb-4 text-gray-600">${item.price}</p>
              <button
                className="w-full py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-800"
                onClick={() => handleAddtoCart(item)} // Pass the item to handleAddtoCart
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
