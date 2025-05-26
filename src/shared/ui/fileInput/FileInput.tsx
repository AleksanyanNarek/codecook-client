import React, { FC, useState } from 'react'
import './fileInput.css';
import Image from 'next/image';

type FileValue = string;

type FileInputProps = {
    value: FileValue;
    addFile: (file: FileValue) => void;
}

const FileInput: FC<FileInputProps> = ({ value, addFile }) => {
    const [dragging, setDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setDragging(true);
    }

    const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setDragging(false);
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        
        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    addFile(reader.result as FileValue);
                }
            }

            reader.readAsDataURL(file);
        }
    }

    const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setDragging(false);

        const file = e.dataTransfer.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                addFile(reader.result as FileValue)
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className='file_input_container'>
            <input
                type="file"
                accept="image/*"
                id='file'
                onChange={ handleFileChange }
                hidden
            />
            <label
                htmlFor='file'
                className={ `file_input_area ${ dragging ? "dragging" : "" }` }
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {
                    value ? (
                        <>
                            <p>Selected file:</p>
                            <Image
                                src={ value }
                                alt=""
                                className='file_input_img'
                                width={ 80 }
                                height={ 80 }
                            />
                        </>
                    ) : (
                        <span className='file_input_placeholder'>
                            Drag and drop your thambnail here or click to browse
                        </span>
                    )
                }
            </label>
        </div>
    )
}

export default FileInput