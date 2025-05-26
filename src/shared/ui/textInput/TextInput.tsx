import React, { FC } from 'react'
import './textInput.css'

type InputProps = {
    name: string
    type: "text" | "password" | "email" | "tel" | "number"
    placeholder: string
    className?: string
    defaultValue: string | number
    onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    required: boolean
}

const TextInput: FC<InputProps> = ({ name, type = "text", placeholder,  className, defaultValue, onchange, required = false }) => {
    return (
        <input
            className={`basic_text_input ${ className }`}
            type={ type }
            name={ name }
            defaultValue={ defaultValue }
            onChange={ onchange }
            placeholder={ placeholder }
            required={ required }
        />
    )
}

export default TextInput