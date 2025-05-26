'use client'
import React, { useActionState } from 'react'
import '../styles/form.css';

import TextInput from '@/shared/ui/textInput/TextInput'
import { loginAction } from '../actions/loginActions';
import Button from '@/shared/ui/button/Button';
import { routes } from '@/shared/utils/routes';
import LinkElement from '@/shared/ui/linkElement/LinkElement';

const LoginForm = () => {
  const [loginState, formAction, isPending] = useActionState(loginAction, {
    loginData: { email: '', password: '' },
    loginErrors: {}
  });

  const { loginData, loginErrors } = loginState;

  return (
    <form className='auth_form' action={ formAction }>
      <label className='auth_label'>
        <div className="input_header">
          <p>Email</p>
          { loginErrors.email && <p className='error_message'>{ loginErrors.email }</p> }
        </div>
        <TextInput
          name='email'
          type='email'
          placeholder='Enter your your email'
          defaultValue={ loginData.email }
          className='auth_input'
          required
        />
      </label>
      <label className='auth_label'>
        <div className="input_header">
          <p>Password</p>
          { loginErrors.password && <p className='error_message'>{ loginErrors.password }</p> }
        </div>
        <TextInput
          name='password'
          type='password'
          placeholder='Enter your your password'
          defaultValue={ loginData.password }
          className='auth_input'
          required
        />
      </label>
      <div className='auth_form_footer'>
        <Button
          text={ isPending ? 'LOG IN...' : 'LOG IN' }
          isDark={ false }
        />
        <span className='auth_footer_text'>
          {"Don't have an account?"}
          <LinkElement
            text='Sign Up'
            url={ routes.signupRoute() }
          />
        </span>
      </div>
    </form>
  )
}

export default LoginForm