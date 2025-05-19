import React from 'react'
import Layout from '../ui/Layout'
import SignUpForm from '../ui/SignUpForm'


const SignUp = () => {
    return (
        <Layout
            title='Sign Up'
            form={ <SignUpForm /> }
        />
    )
}

export default SignUp