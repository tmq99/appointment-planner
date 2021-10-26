import React from "react";

export const Tile = ({tile}) => {
  const valueArray = Object.values(tile)
  return (
    <div className="tile-container">
      {valueArray.map((value,index) => {
        return (
        <p key={index}
           className={`${index === 0 ? "tile-title" : ""} tile`}>
          {value}
        </p>)
      })}
    </div>
  );
};
