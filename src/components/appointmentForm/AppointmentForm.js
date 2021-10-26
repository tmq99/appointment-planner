import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

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
  const getContactName = () => {
    return contacts.map(contact => contact.name)
  } 

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type='text'
      name='title'
      value={title}
      onChange={e => setTitle(e.target.value)}
      placeholder='title'
      required/>
      <ContactPicker
      name='contact'
      value={contact} 
      contacts={getContactName()} 
      onChange={e => setContact(e.target.value)}/>
      <input 
      type='date'
      name='date'
      value={date}
      onChange={e => setDate(e.target.value)}
      required/>
      <input 
      type='time'
      name='time'
      value={time}
      onChange={e => setTime(e.target.value)}
      min={getTodayString()}
      required/>
      <input type='submit' value='Add Appointment'/>
    </form>
  );
};
