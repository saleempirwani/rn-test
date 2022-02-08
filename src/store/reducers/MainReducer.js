import {GET_ONE_USERS, GET_USERS} from '../types';
import {} from '../types';

const initialState = {
  users: [],
  user: {},
  searchText: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_ONE_USERS:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
