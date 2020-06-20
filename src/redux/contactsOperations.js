import  {get, post, deleteItem} from "./api";
import {
  getContactsStart,
  // getContactsSucess,
  // getContactsError,
  postContactStart,
  // postContactSuccess,
  // postContactError,
  deleteContactStart,
  // deleteContactSuccess,
  // deleteContactError,
} from "./contactsActions";

export const fetchContacts = () => (dispatch) => {
  dispatch(getContactsStart());
  get()
};

export const postContact = (contact) => (dispatch) => {
  dispatch(postContactStart());
  post()
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactStart());
  deleteItem()
};


