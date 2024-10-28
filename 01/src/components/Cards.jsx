import React from "react";

const Cards = ({ image, user, amount, storage, usersallowed, upto }) => {
  return (
    <div className="h-auto w-100 text-black bg-white flex flex-col justify-between m-10 rounded-lg p-10 shadow-lg hover:scale-105">
      <img
        src={image}
        className="h-40 w-full object-cover rounded-t-lg"
        alt="Card Image"
      />
      <div className="flex flex-col p-4 text-center gap-4">
        <p className="font-bold">{user}</p>
        <p className="text-xl">{amount}</p>
        <p>{storage}</p>
        <p>{usersallowed} Users Allowed</p>
        <p>Send up to {upto}</p>

        <button className="bg-green-400 rounded p-5 font-bold">
          Start with Free trial
        </button>
      </div>
    </div>
  );
};

export default Cards;
