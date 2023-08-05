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
}

const initialState: IUserManamement = {
  selectAll: false,
  selectedUsersId: [],
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
          (state.selectedUsersId = state.selectedUsersId.filter(userId => userId != action.payload.id)):
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
    selectAll: (state) => {
      state.selectAll = !state.selectAll
    },
    // resetUserViewFormData: (state) => {
    //   return state = { ...initialState };
    // }
  }
})

export const { selectAll, manageUsers } = userManagementSlice.actions;

export default userManagementSlice.reducer;
