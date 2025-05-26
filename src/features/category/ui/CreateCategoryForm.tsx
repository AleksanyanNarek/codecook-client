import React, { FC, useState } from 'react'
import '../styles/createCategoryForm.css';

import { NewCategoryForm } from '@/entities/category/domain';
import { createCategoryQuery } from '@/entities/category/api/categoryApi';

import { ErrorResponse } from '@/shared/utils/types';
import { extractFieldErrors } from '@/shared/utils/helpers';
import TextInput from '@/shared/ui/textInput/TextInput';
import FileInput from '@/shared/ui/fileInput/FileInput';
import InputLabel from '@/shared/ui/inputLabel/InputLabel';
import Button from '@/shared/ui/button/Button';

type newCategoryState = {
  data: NewCategoryForm
  errors: { [K in keyof NewCategoryForm]?: string };
}

type CreateCategoryFormProps = {
  closeModal: () => void;
}

const CreateCategoryForm: FC<CreateCategoryFormProps> = ({ closeModal }) => {
  const [newCategoryState, setNewCategoryState] = useState<newCategoryState>({
    data: { name: '', thumbnail: '' },
    errors: {},
  });

  const { data, errors } = newCategoryState;

  const creatCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = await createCategoryQuery(newCategoryState.data);

    if (data.success) {
      closeModal();
    }

    const { errorDetails } = data as ErrorResponse;

    setNewCategoryState(prev => ({
      ...prev,
      errors: extractFieldErrors(errorDetails, ['name', 'thumbnail'])
    }));
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewCategoryState(prev => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value
      }
    }));
  }

  const addCategoryThumbnail = (newThumbnail: string) => {
    setNewCategoryState(prev => ({
      ...prev,
      data: {
        ...prev.data,
        thumbnail: newThumbnail
      }
    }))
  }

  return (
    <form onSubmit={ creatCategory } className='create_category_form'>
      <InputLabel
        labelText='Name'
        errorMessage={ errors.name }
      >
        <TextInput
          name='name'
          type='text'
          placeholder='Enter category name'
          defaultValue={ data.name }
          onchange={ handleInputChange }
          required
        />
      </InputLabel>
      <InputLabel
        labelText='Category thumbnail'
        errorMessage={ errors.thumbnail }
      >
        <FileInput value={data.thumbnail} addFile={ addCategoryThumbnail } />
      </InputLabel>
      <Button
        text='Create Category'
        isDark={ false }
      />
    </form>
  )
}

export default CreateCategoryForm