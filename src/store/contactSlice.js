import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './thunks';

const status = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const thunks = [fetchContacts, addContact, deleteContact];

const createStatus = status => isAnyOf(...thunks.map(el => el[status]));

const pendingAction = state => {
  state.isLoading = true;
  state.error = null;
};

const fulfilledAction = state => {
  state.isLoading = false;
  state.error = null;
};

const rejectedAction = (state, { payload }) => {
  state.error = payload.message;
  state.isLoading = false;
};

const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

const handleFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
};

const handleFulfilledDelete = (state, { payload }) => {
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = status;
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(createStatus(PENDING), pendingAction)
      .addMatcher(createStatus(FULFILLED), fulfilledAction)
      .addMatcher(createStatus(REJECTED), rejectedAction);
  },
});

export default contactsSlice.reducer;
