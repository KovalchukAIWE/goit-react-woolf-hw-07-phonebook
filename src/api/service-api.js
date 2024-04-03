import axios from 'axios';

axios.defaults.baseURL = 'https://660dc3c86ddfa2943b352d3e.mockapi.io';

export const getAllContacts = () => axios.get('/contacts/');

export const addNewContacts = contact => {
  return axios.post('/contacts/', contact);
};

export const delContacts = id => {
  return axios.delete(`/contacts/${id}`);
};
