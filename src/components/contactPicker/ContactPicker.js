import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option >No contact selected</option>
      {contacts.map((contact, index) => {
        return (
          <option value={contact} key={index}>{contact}</option>
        )
      })}
    </select>
  );
};
