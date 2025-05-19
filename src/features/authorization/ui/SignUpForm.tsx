'use client'
import React, { useActionState } from 'react'
import '../styles/form.css';

import { signUpAction } from '../actions/signUpActions';
import TextInput from '@/shared/ui/textInput/TextInput'
import Button from '@/shared/ui/button/Button';
import { routes } from '@/shared/utils/routes';
import LinkElement from '@/shared/ui/linkElement/LinkElement';

const SignUpForm = () => {
  const [signUpState, formAction, isPending] = useActionState(signUpAction, {
    signUpData: { email: '', name: '', surename: '', phone: '', password: '' },
    signUpErrors: {}
  });

  const { signUpData, signUpErrors } = signUpState;

  return (
    <form className='auth_form' action={ formAction }>
      <label className='auth_label'>
        <div className="input_header">
          <p>Name</p>
          { signUpErrors.name && <p className='error_message'>{ signUpErrors.name }</p> }
        </div>
        <TextInput
          name='name'
          type='text'
          placeholder='Enter your your name'
          defaultValue={ signUpData.name }
          className='auth_input'
          required
        />
      </label>
      <label className='auth_label'>
        <div className="input_header">
          <p>Surename</p>
          { signUpErrors.surename && <p className='error_message'>{ signUpErrors.surename }</p> }
        </div>
        <TextInput
          name='surename'
          type='text'
          placeholder='Enter your your surename'
          defaultValue={ signUpData.surename }
          className='auth_input'
          required
        />
      </label>
      <label className='auth_label'>
        <div className="input_header">
          <p>Phone</p>
          { signUpErrors.phone && <p className='error_message'>{ signUpErrors.phone }</p> }
        </div>
        <TextInput
          name='phone'
          type='tel'
          placeholder='Enter your your phone'
          defaultValue={ signUpData.phone }
          className='auth_input'
          required
        />
      </label>
      <label className='auth_label'>
        <div className="input_header">
          <p>Email</p>
          { signUpErrors.email && <p className='error_message'>{ signUpErrors.email }</p> }
        </div>
        <TextInput
          name='email'
          type='email'
          placeholder='Enter your your email'
          defaultValue={ signUpData.email }
          className='auth_input'
          required
        />
      </label>
      <label className='auth_label'>
        <div className="input_header">
          <p>Password</p>
          { signUpErrors.password && <p className='error_message'>{ signUpErrors.password }</p> }
        </div>
        <TextInput
          name='password'
          type='password'
          placeholder='Enter your your password'
          defaultValue={ signUpData.password }
          className='auth_input'
          required
        />
      </label>
      <div className='auth_form_footer'>
        <Button
          text={ isPending ? 'SIGN UP...' : 'SIGN UP' }
          isDark={ false }
        />
        <span className='auth_footer_text'>
          Already have an account
          <LinkElement
            text='Log In'
            url={ routes.loginRoute() }
          />
        </span>
      </div>
    </form>
  )
}

export default SignUpForm