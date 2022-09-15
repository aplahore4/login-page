import React, { Fragment } from 'react'
import Home from './components/Home/Home'
import Login from './components/Login/Login'

import MainHeader from './components/MainHeader/MainHeader'

function App() {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <main>
        <Login></Login>
        <Home></Home>
      </main>
    </Fragment>
  )
}

export default App
