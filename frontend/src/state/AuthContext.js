import {　createContext, useEffect, useReducer　} from "react";
import AuthReducer from "./AuthReducer";

//最初のユーザー状態を定義
const initialState =  {
    user: JSON.parse(localStorage.getItem("user")) || null,
    // user: {
    //     _id: "62d14dccff767eb926de7a6e",
    //     username: "shincode",
    //     email: "itou@gmail.com",
    //     password: "$2b$10$S4sSlhGg3LMxtsjpoY.fKeemI5b5ZDDVJU2AJksHnbZi1KdEe/f0W",
    //     profilePicture: "/person/1.jpeg",
    //     coverPicture: "",
    //     followers: [],
    //     followings: [],
    //     isAdmin: false
    // },
    isFetching: false,
    error: false,
}

//状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])
    return (<AuthContext.Provider value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
        {children}
    </AuthContext.Provider>
    )
}