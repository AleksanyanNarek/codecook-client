import React, { FC } from 'react'
import './textInput.css'

type InputProps = {
    name: string
    type: "text" | "password" | "email" | "tel"
    placeholder: string
    className: string
    defaultValue: string
    required: boolean
}

const TextInput: FC<InputProps> = ({ name, type = "text", placeholder, defaultValue, required = false, className }) => {
    return (
        <input
            className={`basic_text_input ${ className }`}
            type={ type }
            name={ name }
            defaultValue={ defaultValue }
            placeholder={ placeholder }
            required={ required }
        />
    )
}

export default TextInput