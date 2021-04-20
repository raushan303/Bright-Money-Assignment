import { data } from '../data';

export default function Reducer(state = data, { type, payload }) {
  console.log(payload);
  switch (type) {
    case 'addBill':
      return [...state, payload.data];
    case 'editBill':
      return state.map((obj) => {
        if (obj.id === payload.data.id) return payload.data;
        else return obj;
      });
    case `deleteBill`:
      return state.filter((obj) => obj.id !== payload.id);
    default:
      return state;
  }
}
