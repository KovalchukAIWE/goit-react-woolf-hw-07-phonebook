import styles from './Filter.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onFilter } from 'store/filterSlice';
import { getFilter } from 'store/selectors';

const Filter = () => {
  const { filter } = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(onFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={handleChange}
      className={styles.input}
    />
  );
};

export default Filter;
