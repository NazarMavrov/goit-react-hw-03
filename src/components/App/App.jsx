import { useState, useEffect } from "react";
import ContactList from "../ContactList/ContactList"
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import contactsData from "../ListOfContacts/ListOfContacts";
import { nanoid } from "nanoid";



export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [contacts, setContacts] = useState(contactsData)

   useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
        
  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleAddContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number
    };
    setContacts([...contacts, newContact]);
  };
  
  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  
  
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList contacts={filteredContacts} deleteContact={handleDeleteContact} />
    </div>

  )
}