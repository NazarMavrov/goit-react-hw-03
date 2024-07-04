import css from './ContactList.module.css'
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function contactList({ contacts, deleteContact }) {
  return (
    <div className={css.contactsList}>
        {contacts.map(contact => (
            <div key={contact.id} className={css.contact}>
                <p><FaUser size="12" />  {contact.name}</p>
                <p><BsFillTelephoneFill size="12" /> {contact.number}</p>
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </div>
      ))}
    </div>
  )
}