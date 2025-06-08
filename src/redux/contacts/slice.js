import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  deleteContact,
  fetchContacts,
  addContact,
  editContact,
  logoutThunk,
} from "./operations";

// import { selectItems } from "./selectors";
// import { selectNameFilter } from "../filters/selectors";

const initialState = {
  items: [],
  isLoading: false,
  isError: null,
  isEdit: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    isEditContact: (state, action) => {
      state.isEdit = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(editContact.fulfilled, (state, action) => {
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
        state.isEdit = null;
      })

      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        (state, action) => {
          state.isError = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContact.fulfilled,
          addContact.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const { setLoading, setError, dataFullfilledOperation, isEditContact } =
  slice.actions;
export const contactsReducer = slice.reducer;
