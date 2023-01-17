import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type MessageState = {
  message: string
}

const initialState: MessageState = {
  message: 'Initial Message',
}

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state: MessageState, action: PayloadAction<string>) => {
      state.message = action.payload
    },
  },
})

export const { setMessage } = messageSlice.actions
export default messageSlice.reducer
