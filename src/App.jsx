import React, { useState } from "react";
import AddContactForm from "./components/AddContactForm";
import ContactTable from "./components/ContactTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addContact = (newContact) => {
    setContacts([
      ...contacts,
      { id: contacts.length + 1, ...newContact },
    ]);
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((c) =>
        c.id === updatedContact.id ? updatedContact : c
      )
    );
  };

  const filteredContacts = contacts.filter(
    (c) =>
      c.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.phone.includes(searchTerm)
  );

  return (
    <div>
      <h1>Address Book</h1>
      <AddContactForm onAdd={addContact} />
      <SearchBar onSearch={setSearchTerm} />
      <ContactTable
        contacts={filteredContacts}
        onUpdate={updateContact}
      />
    </div>
  );
}

export default App;
