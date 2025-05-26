'use client'
import React, { FC } from 'react'
import './button.css';

type ButtonProps = {
  text: string;
  isDark: boolean;
  onclick?: () => void;
}

const Button: FC<ButtonProps> = ({ text, isDark, onclick }) => {
  return (
    <button
      className={ `big_button ${ isDark ? 'dark' : '' }` }
      onClick={ onclick }
    >
      { text }
    </button>
  )
}

export default Button