import { useAppSelector } from "./redux";

export function useAuth() {
    const { id, token, email } = useAppSelector(state => state.userReducer);

    return {
        isAyth: !!email,
        id,
        email,
        token
    }
}