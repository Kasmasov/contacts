import { combineReducers, configureStore } from '@reduxjs/toolkit'
import modalReducer from './reducers/modalSlice';
import contactsReducer from './reducers/contactSlice'
import userReducer from './reducers/userSlice';

const rootReducer = combineReducers({
    contactsSlice: contactsReducer,
    modalSlice: modalReducer,
    userReducer: userReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type TRootState = ReturnType<typeof rootReducer>
export type TAppStore = ReturnType<typeof setupStore>
export type TAppDispatch = TAppStore["dispatch"]