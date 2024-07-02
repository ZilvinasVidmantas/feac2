import React from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext({
  user: null
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  const login = async (email, password) => {
    const response = await fetch('http://localhost:3001/users');
    const users = await response.json();
    const user = users.find(user => user.email === email && user.password === password);
    if (user !== undefined) {
      setUser(user);
      setError(null);
    } else {
      setError("Bad login. Try again")
    }
  }
  return (

    <AuthContext.Provider value={{
      user,
      error,
      login
    }}>
      {children}
    </AuthContext.Provider >
  )
}


AuthProvider.propTypes = {
  children: PropTypes.ReactNode
}

export const useAuth = () => React.useContext(AuthContext);

