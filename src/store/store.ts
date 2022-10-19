import { combineReducers, configureStore } from '@reduxjs/toolkit'
import modalReducer from './reducers/modalSlice';
import contactsReducer from './reducers/contactSlice'

const rootReducer = combineReducers({
    contactsSlice: contactsReducer,
    modalSlice: modalReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type TRootState = ReturnType<typeof rootReducer>
export type TAppStore = ReturnType<typeof setupStore>
export type TAppDispatch = TAppStore["dispatch"]