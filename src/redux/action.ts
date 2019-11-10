import {User} from '../models/User';
import {USER_LIST_ACTION_TYPES, UserActionTypes} from './type';

export interface ActionTypes {
  type: USER_LIST_ACTION_TYPES;
  payload: any;
}

export const addUser = (user: User): UserActionTypes => ({
  type: USER_LIST_ACTION_TYPES.ADD_USER,
  payload: user,
});

export const updateUser = (user: User): UserActionTypes => ({
  type: USER_LIST_ACTION_TYPES.UPDATE_USER,
  payload: user,
});
