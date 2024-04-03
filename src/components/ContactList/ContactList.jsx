import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from 'store/selectors';
import { deleteContact, fetchContacts } from 'store/thunks';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ id, name, phone, createdAt }) => (
        <li className={styles.row} key={id}>
          <div className={styles.item}>{name}</div>
          <div className={styles.item}>{phone}</div>
          <div className={styles.item}>
            <button
              className={styles.button}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
