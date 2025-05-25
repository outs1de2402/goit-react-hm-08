import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { selectVisibleContacts } from "../../redux/contacts/slice";
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
      {error && (
        <h2 className="text-gray-800 font-bold flex justify-self-center">NT</h2>
      )}
      {loading && (
        <span className="loading loading-dots text-accent loading-xl flex justify-self-center"></span>
      )}
    </>
  );
};

export default ContactList;
