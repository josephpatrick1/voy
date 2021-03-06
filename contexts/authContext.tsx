import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { setCookie, destroyCookie, parseCookies } from 'nookies';
import Router from 'next/router';
import { api } from '../services/api';

interface SignInProps {
    username: string;
    password: string;
}

interface UserProps {
    username: string;
    name: string;
    email: string;
    birthDate: string;
}

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextProps {
    signIn: (data: SignInProps) => Promise<void>;
    signOut: () => Promise<void>;
    user: UserProps | null;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps | null>(null);

    const isAuthenticated = !!user;

    useEffect(()=>{
        const { 'enchanteauth.token': token } = parseCookies();

        if (token){
            api.get(
                'user/'
            ).then(({data}: {data: UserProps}) => {
                setUser(data);
            }).catch((error: any)=>{
                Router.push('/login');
                console.log(error);
            });
        }
    }, []);


    async function signIn({ username, password }: SignInProps) {
        const maxAgeToken = 60 * 60 * 24; // 2 days
        await api.post('token/', { username: username, password: password }).then(({ data })=>{
            if(data.access){
                setUser(data.data);
                setCookie(undefined, 'enchanteauth.token', data.access, {
                    maxAge: maxAgeToken
                });
                setCookie(undefined, 'enchanteauth.refreshtoken', data.refresh, {
                    maxAge: maxAgeToken
                });
                api.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
                Router.push('/principal');
            }
            else {
                alert("Nao foi possível efetuar login!");
                setUser(null);
            }
                
        }).catch(() => {
            setUser(null);
            alert("Nao foi possível efetuar login!");
        });
    }

    async function signOut() {
        setUser(null);

        destroyCookie(undefined, 'enchanteauth.token');
        destroyCookie(undefined, 'enchanteauth.refreshtoken');
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextProps {
    return useContext(AuthContext);
}