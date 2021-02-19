/* eslint-disable import/no-unresolved */
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

interface IAuthProviderProps {
  children: React.ReactChildren;
}

interface AuthData {
  token: string;
  user: { email: string; name: string };
}

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthContextState {
  user: { email: string; name: string };
  loading: boolean;
  signIn(credentials: SignInCredencials): any;
  signOut(): void;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export function AuthProvider({ children }: IAuthProviderProps): JSX.Element {
  const [data, setData] = useState<AuthData>({} as AuthData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@Wiser:token',
        '@Wiser:user',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('users', {
      email,
      password,
    });

    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ['@Wiser:token', token],
      ['@Wiser:user', JSON.stringify(user)],
    ]);

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@Wiser:token', '@Wiser:user']);

    setData({} as AuthData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
