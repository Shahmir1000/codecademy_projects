import React from "react";
import { Tile } from "../../components/tile/Tile"
export const TileList = ({objectArray}) => {
  console.log('asdf');

  return (
    <div>
      {
        objectArray.map((element, index) => {
          return <Tile object={element} key={index}/>
        })
      }
    </div>
  );
};
