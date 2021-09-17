import React from "react";

export const Tile = ({object}) => {
  const valuesArray = Object.values(object);
  return (
    <div className="tile-container">
      {
        valuesArray.map((element, index ) => {
          return <p className={index === 0 ? "TileList" : "Tile"}> {element} </p>
        })
      }
      <br/>
    </div>
  );
};
