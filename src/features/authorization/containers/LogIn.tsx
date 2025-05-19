import React from 'react'
import Layout from '../ui/Layout'
import LoginForm from '../ui/LoginForm'


const LogIn = () => {
    return (
        <Layout
            title='Log In'
            form={ <LoginForm /> }
        />
    )
}

export default LogIn