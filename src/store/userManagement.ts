import { createSlice } from "@reduxjs/toolkit";

interface IUserViewFormPayload {
  prop: string;
  value: string;
}

export interface IUserManamement {
  [k: string]: string | boolean;
  selectAll: boolean;
}

const initialState: IUserManamement = {
  selectAll: false,

}

const userManagementSlice = createSlice({
  name: 'userManagement',
  initialState,
  reducers: {
    // selectAll: {
    //   reducer(state, action: PayloadAction<IUserViewFormPayload>) {
    //     state.selectAll = !state.selectAll
    //   },
    //   prepare(prop: string, value: string) {
    //     return {
    //       payload: {
    //         prop,
    //         value,
    //       }
    //     }
    //   },
    // },
    selectAll: (state) => {
      state.selectAll = !state.selectAll
    },
    // resetUserViewFormData: (state) => {
    //   return state = { ...initialState };
    // }
  }
})

export const { selectAll } = userManagementSlice.actions;

export default userManagementSlice.reducer;
