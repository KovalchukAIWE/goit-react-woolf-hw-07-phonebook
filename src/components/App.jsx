import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.contacts}>Contacts</h2>
      <div className={styles.contactsList}>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default App;
