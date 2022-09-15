import React from 'react'
import Card from '../UI/Card/Card'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

import classes from './Login.module.css'

const Login = () => {
  const submitHandler = () => {}
  const emailIsValid = ''
  const emailStatus = {}
  const emailChangeHandler = () => {}
  const validateEmailBlurHandler = () => {}
  const passwordIsValid = ''
  const passwordStatus = {}
  const passwordChangeHandler = () => {}
  const validatePasswordBlurHandler = () => {}

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type='email'
          id='email'
          label='E-Mail'
          isValid={emailIsValid}
          value={emailStatus.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailBlurHandler}
        ></Input>
        <Input
          type='password'
          id='passeord'
          label='Password'
          isValid={passwordIsValid}
          value={passwordStatus.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordBlurHandler}
        ></Input>
        <div className={classes.actions}>
          <Button className={classes.btn} type='submit'>
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Login
