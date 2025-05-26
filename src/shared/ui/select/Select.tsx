import React, { FC, ReactNode } from 'react'
import './select.css';

type SelectProps = {
    name: string
    value: string
    onchange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    children: ReactNode
    required: boolean
}

const Select: FC<SelectProps> = ({ onchange, name, value, required, children }) => {
    return (
        <select
            onChange={ onchange }
            name={ name }
            value={ value }
            required={ required }
            className='select_element'
        >
            { children }
        </select>
    )
}

export default Select