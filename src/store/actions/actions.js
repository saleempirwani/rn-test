import axios from 'axios';
import SimpleToast from 'react-native-simple-toast';
import {GET_ONE_USERS, GET_USERS} from '../types';

export const getUsers =
  (params = '', singleUser = false) =>
  async dispatch => {
    try {
      const response = await axios.get(
        'https://api.github.com/users' + (params ? `/${params}` : ''),
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
          },
        },
      );

      if (response.status === 200) {
        if (singleUser) {
          dispatch({type: GET_ONE_USERS, payload: response?.data});
          return;
        }
        params
          ? dispatch({type: GET_USERS, payload: [response.data]})
          : dispatch({type: GET_USERS, payload: response?.data});
      }
    } catch (error) {
      SimpleToast.show('User not found, please try again.');
      console.log('ERR [getUsers] ============>  ', error.message);
      return dispatch({type: GET_USERS, payload: []});
    }
  };
