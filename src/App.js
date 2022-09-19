import React, { Fragment, useContext } from 'react'

import AuthContext from './store/auth-context'

import Home from './components/Home/Home'
import Login from './components/Login/Login'

import MainHeader from './components/MainHeader/MainHeader'

function App() {
  const ctx = useContext(AuthContext)
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <main>
        {!ctx.isLoggedIn && <Login></Login>}
        {ctx.isLoggedIn && <Home></Home>}
      </main>
    </Fragment>
  )
}

export default App
