import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";

const ContactList = () => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ul>
        {visibleContacts.map((item) => (
          <li key={item.id}>
            <Contact name={item.name} number={item.number} id={item.id} />
          </li>
        ))}
      </ul>
      {error && <h2>NT</h2>}
      {loading && <span></span>}
    </>
  );
};

export default ContactList;
