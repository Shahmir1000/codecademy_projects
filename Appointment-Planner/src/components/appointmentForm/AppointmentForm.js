import React from "react";
import {ContactPicker} from "../../components/contactPicker/ContactPicker"
export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="title">Title:</label>
      <input value={title} onChange={e => setTitle(e.target.value)} type="text" id="title" min={getTodayString}/>
      <label for="date">Date:</label>
      <input value={date} onChange={e => setDate(e.target.value)} type="date" id="date"/>
      <label for="time">Time:</label>
      <input value={time} onChange={e => setTime(e.target.value)} type="time" id="time"/>
      <ContactPicker contacts={contacts} contact={contact} setContact={setContact}/>
      <button type="submit">Submit</button>
    </form>
  );
};
