import Contact from "../Contact/Contact"

import css from "./ContactList.module.css"

export default function ContactList({ contacts }) {
    return (
        <ul className={css.contactList}>
            {contacts.map((contact) => (
                <li className={css.contactContainer} key={contact.id}>
                    <Contact nameContact={contact.name} numberContact={contact.number} />
                </li>
            ))}
        </ul>
    );
}


