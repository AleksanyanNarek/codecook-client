'use client'
import React, { FC } from 'react'
import './button.css';

type ButtonProps = {
  text: string;
  isDark: boolean;
}

const Button: FC<ButtonProps> = ({ text, isDark }) => {
  return (
    <button
      className={ `big_button ${ isDark ? 'dark' : '' }` }
      // onClick={ onclick }
    >
      { text }
    </button>
  )
}

export default Button