import React, {
  useReducer,
  useState,
  useRef,
  useContext,
  useEffect,
} from 'react'
import Card from '../UI/Card/Card'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import AuthContext from '../../store/auth-context'

import classes from './Login.module.css'

const Login = () => {
  const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.includes('@') }
    }
    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.includes('@') }
    }
    return { value: '', isValid: false }
  }
  const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.length > 6 }
    }
    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.length > 6 }
    }
    return { value: '', isValid: false }
  }
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  })
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  })
  const [formIsValid, setFormIsValid] = useState(false)

  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid } = passwordState

  const authCtx = useContext(AuthContext)

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value)
    } else if (!emailIsValid) {
      emailInputRef.current.focus()
    } else {
      passwordInputRef.current.focus()
    }
  }
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value })
  }
  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' })
  }
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value })
  }
  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' })
  }

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid)
    }, 500)

    return () => {
      clearTimeout(identifier)
    }
  }, [emailIsValid, passwordIsValid])
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          type='email'
          id='email'
          label='E-Mail'
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>
        <Input
          ref={passwordInputRef}
          type='password'
          id='passeord'
          label='Password'
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
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
