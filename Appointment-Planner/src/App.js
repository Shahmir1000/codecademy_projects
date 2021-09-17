import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState(
    [
      {
        name: 'Random',
        number: '000-000-0000',
        email: 'Random@gmail.com'
      },
      {
        name: 'Random1',
        number: '100-000-0000',
        email: 'Random1@gmail.com'
      }
    ]
  );

  const [appointments, setAppointments] =  useState([])
 
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
 const addContact = (name, number, email)=>{
  const contact = {
    name: name,
    number: number,
    email: email
  }
  setContacts((prevContacts) => [...prevContacts, contact]);
 }
 const addAppointment = (title, contact, date, time)=>{
  const appointment = {
    title: title,
    contact: contact,
    date: date,
    time: time
  }
  setAppointments((prevAppointments)=> [...prevAppointments, appointment])
 }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage 
              contacts={contacts}
              addContact={addContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              appointments={appointments} 
              contacts={contacts}
              addAppointment = {addAppointment}  
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
