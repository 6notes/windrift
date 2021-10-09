import { Config } from 'core/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Config = null

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        init: (state, action: PayloadAction<Config>) => action.payload
    }
})

export const { init } = configSlice.actions

export default configSlice.reducer
