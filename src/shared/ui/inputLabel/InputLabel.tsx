import React, { FC } from 'react'
import './inputLabel.css';

type InputLabelProps = {
    labelText: string;
    errorMessage?: string;
    children: React.ReactNode;
}

const InputLabel: FC<InputLabelProps> = ({ labelText, errorMessage, children }) => {
    return (
        <label className='input_label'>
            <div className='input_header'>
                <p>{ labelText }</p>
                { errorMessage && <p className='input_error_message'>{ errorMessage }</p> }
            </div>
            { children }
        </label>
    )
}

export default InputLabel