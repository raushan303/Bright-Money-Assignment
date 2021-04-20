import * as actionTypes from './actionType';

export const addBill = (data) => ({
  type: actionTypes.ADD_BILL,
  payload: { data },
});

export const editBill = (data) => ({
  type: actionTypes.EDIT_BILL,
  payload: { data },
});

export const deleteBill = (id) => ({
  type: actionTypes.DELETE_BILL,
  payload: { id },
});
