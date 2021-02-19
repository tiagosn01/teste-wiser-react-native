import React from 'react';

import { AuthProvider } from './auth';

interface IAppProviderProps {
  children: React.ReactChildren;
}

function AppProvider({ children }: IAppProviderProps): JSX.Element {
  return <AuthProvider>{children}</AuthProvider>;
}

export default AppProvider;
