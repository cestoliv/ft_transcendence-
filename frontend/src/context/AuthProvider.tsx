import React, { createContext, useState, ReactNode } from 'react';
import { IAuth, IUser, IUserFriend, IChannel } from '../interfaces';
import { useCookies } from 'react-cookie';

interface AuthContextType {
	auth: Record<string, unknown>;
	setAuth: (auth: Record<string, unknown>) => void;
}

const AuthContext = createContext<AuthContextType>({
	auth: {},
	setAuth: () => {},
});

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [cookies, setCookie, removeCookie] = useCookies(['bearer']);
	const [auth, setAuth] = useState({
		bearer: cookies.bearer,
		otp_ok: false,
	} as IAuth);

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;