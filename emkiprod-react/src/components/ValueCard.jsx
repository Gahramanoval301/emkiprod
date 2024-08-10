import React from "react";
import line from "/assets/line.png";

function ValueCard({ value }) {
  return (
    <div className="flex items-center h-52 md:h-32 md:m-6 box">
      <div className="">
        <img src={value.image} alt="check" />
      </div>
      <div>
        <h3>{value.title}</h3>
        <div className="line">
          <img src={line} alt="line" />
        </div>
        <p className="w-60">{value.content}</p>
      </div>
    </div>
  );
}

export default ValueCard;
