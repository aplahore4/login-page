import React from 'react'
import Navigation from './Navigation'

import classes from './MainHeader.module.css'

const MainHeader = () => {
  return (
    <header className={classes['main-header']}>
      <h1>Demo Page</h1>
      <Navigation></Navigation>
    </header>
  )
}

export default MainHeader
