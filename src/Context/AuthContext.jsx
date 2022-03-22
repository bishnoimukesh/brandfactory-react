import {createContext, useContext, useReducer} from 'react';
import {authReducer} from '../Reducer/authReducer';

const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const tokenDetails = localStorage.getItem("token") || "";
    const [authState, authDispatch] = useReducer(authReducer, {isLogin: !!tokenDetails,
        token: tokenDetails});
        console.log(authState.isLogin, authState.token);
    return <AuthContext.Provider value={{authState, authDispatch}}>
        {children}
    </AuthContext.Provider>;
}

const useAuthContext = () =>  useContext(AuthContext);

export {useAuthContext, AuthProvider};