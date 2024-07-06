import css from './ContactList.module.css'
import Contact from '../Contact/Contact';


export default function ContactList({ contacts, deleteContact }) {
  return (
    <div className={css.contactsList}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />
      ))}
    </div>
  );
}