import { useAppSelector } from "./redux";

export function useAuth() {
    const { id, token, userEmail } = useAppSelector(state => state.userReducer);

    return {
        isAuth: !!userEmail,
        id,
        userEmail,
        token
    }
}