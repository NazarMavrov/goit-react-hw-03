import css from './Contact.module.css';
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ contact, deleteContact }) {
  return (
    <div className={css.contact}>
      <p><FaUser size="12" />  {contact.name}</p>
      <p><BsFillTelephoneFill size="12" /> {contact.number}</p>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
}
