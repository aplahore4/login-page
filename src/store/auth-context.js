import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
})

export const AuthProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    const storedUserLoggedInUserInformation = localStorage.getItem('isLoggedIn')
    if (storedUserLoggedInUserInformation === '1') {
      setIsLoggedIn(true)
    }
  }, [])

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }
  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true)
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    ></AuthContext.Provider>
  )
}
export default AuthContext
