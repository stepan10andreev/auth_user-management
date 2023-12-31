import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAddUserPayload {
  id: string;
  method?: EMethods;
}

export enum EMethods {
  add = "ADD",
  delete = "DELETE",
}

export interface IUserManamement {
  [k: string]: string | boolean | string[];
  selectAll: boolean;
  selectedUsersId: string[];
  reset: boolean;
}

const initialState: IUserManamement = {
  selectAll: false,
  selectedUsersId: [],
  reset: false,
}

const userManagementSlice = createSlice({
  name: 'userManagement',
  initialState,
  reducers: {
    manageUsers: {
      reducer(state, action: PayloadAction<IAddUserPayload>) {
        action.payload.method === 'ADD' ?
          state.selectedUsersId = [...state.selectedUsersId, action.payload.id] :
          action.payload.method === 'DELETE' ?
            (state.selectedUsersId = state.selectedUsersId.filter(userId => userId != action.payload.id)) :
            ''
      },
      prepare(id: string, method?: EMethods) {
        return {
          payload: {
            id,
            method,
          }
        }
      },
    },
    reset: {
      reducer(state, action: PayloadAction<{ value: boolean }>) {
        state.reset = action.payload.value;
        state.selectedUsersId = initialState.selectedUsersId;
      },
      prepare(value: boolean) {
        return {
          payload: {
            value
          }
        }
      }
    },
    selectAll: (state) => {
      state.selectAll = !state.selectAll
    },
  }
})

export const { selectAll, manageUsers, reset } = userManagementSlice.actions;

export default userManagementSlice.reducer;
