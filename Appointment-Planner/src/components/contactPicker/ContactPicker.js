import React from "react";

export const ContactPicker = ({contacts, handleChange}) => {
  return (
    <div>
      <label for="contact">Contact:</label>
      <select onChange={handleChange} id="contact">
        <option value="">--Please choose an option--</option>
        {
          contacts.map((object)=>{
            return <option value={object.name}>{object.name}</option>
          })
        }
      </select>
    </div>
  );
};
