import { createSlice } from '@reduxjs/toolkit'

const filesSlice = createSlice({
  name: 'files',
  initialState: { items: [] },
  reducers: {
    addFile: (state, action) => {
      state.items.push(action.payload)
    },
  },
})

export const { addFile } = filesSlice.actions
export default filesSlice.reducer
