import React, {
    useContext,
    createContext,
    useState,
    ReactNode,
    useEffect,
} from "react";

import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { REDIRECT_URI } = process.env;
const { SCOPE } = process.env;
const { RESPONSE_TYPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;

import { api } from "../services/api";
import { COLLECTION_USER } from "../configs/storage";

type User = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
};

type AuthContextData = {
    user: User;
    loading: boolean;
    signIn: () => Promise<void>;
    logout: () => Promise<void>;
};
type AuthProviderProps = {
    children: ReactNode;
};
type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string;
        error?: string;
    };
};
const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState<boolean>(false);
    const signIn = async () => {
        try {
            setLoading(true);

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const { type, params } = (await AuthSession.startAsync({
                authUrl,
            })) as AuthorizationResponse;

            if (type === "success" && !params.error) {
                api.defaults.headers.authorization = `Bearer ${params.access_token}`;

                const userInfo = await api.get("/users/@me");

                const firstName = userInfo.data.username.split(" ")[0];
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

                const userData = {
                    ...userInfo.data,
                    firstName,
                    token: params.access_token,
                };
                await AsyncStorage.setItem(
                    COLLECTION_USER,
                    JSON.stringify(userData)
                );
                setUser(userData);
            }
        } catch {
            throw new Error("Não foi possível autenticar");
        } finally {
            setLoading(false);
        }
    };
    const logout = async () => {
        setUser({} as User);
        await AsyncStorage.removeItem(COLLECTION_USER);
    };
    const loadUserStorageData = async () => {
        const storage = await AsyncStorage.getItem(COLLECTION_USER);

        if (storage) {
            const userLogged = JSON.parse(storage) as User;
            api.defaults.headers.authorization = `Bearer ${userLogged.token}`;

            setUser(userLogged);
        }
    };
    useEffect(() => {
        loadUserStorageData();
    }, []);
    return (
        <AuthContext.Provider value={{ user, loading, signIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
