import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name:</label>
      <input 
        onChange={e => setName(e.target.value)} 
        value={name} 
        type="text"
        id="name"
      />
      <label for="phone-number">Phone Number:</label>
      <input
        onChange={e => setPhone(e.target.value)} 
        value={phone} 
        type="tel" 
        id="phone-number" 
        pattern="^[1-9]\d{2}-\d{3}-\d{4}$" 
        placeholder="000-000-0000"
      />
      <label for="email">Email:</label>
      <input
        onChange={e => setEmail(e.target.value)} 
        value={email} 
        type="email" 
        id="email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
