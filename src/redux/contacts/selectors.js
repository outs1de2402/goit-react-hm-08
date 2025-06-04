import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectItems = (state) => state.contacts.items;
export const selectError = (state) => state.contacts.isError;
export const selectLoading = (state) => state.contacts.isLoading;
export const selectIsEdit = (state) => state.contacts.isEdit;

export const selectVisibleContacts = createSelector(
  [selectItems, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
