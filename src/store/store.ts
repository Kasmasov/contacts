import { combineReducers, configureStore } from '@reduxjs/toolkit'
import contactsReducer from './reducers/contactSlice'

const rootReducer = combineReducers({
    contacts: contactsReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type TRootState = ReturnType<typeof rootReducer>
export type TAppStore = ReturnType<typeof setupStore>
export type TAppDispatch = TAppStore["dispatch"]