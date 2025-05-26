import React, { FC } from 'react'
import './modal.css';

type ModalProps = {
    title: string;
    closeModal: () => void;
    children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ title, closeModal, children }) => {
    return (
        <div className='modal_shadow' onClick={ closeModal }>
            <div className='modal_container' onClick={(e) => e.stopPropagation()}>
                <div className='modal_header'>
                    <h2 className='modal_title'>{ title }</h2>
                    <button className='modal_close_button' onClick={ closeModal }>
                        &times;
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal