import React, { FC, useEffect, useState } from 'react'
import '../styles/createMenuItemForm.css';

import { NewMenuItemForm } from '@/entities/menu/domain';

import { ErrorResponse, SuccessResponse } from '@/shared/utils/types';
import { extractFieldErrors } from '@/shared/utils/helpers';
import TextInput from '@/shared/ui/textInput/TextInput';
import FileInput from '@/shared/ui/fileInput/FileInput';
import InputLabel from '@/shared/ui/inputLabel/InputLabel';
import Button from '@/shared/ui/button/Button';
import { createMenuItemQuery } from '@/entities/menu/api/menuItemApi';
import { Category } from '@/entities/category/domain';
import { getAllCategoryQuery } from '@/entities/category/api/categoryApi';
import Select from '@/shared/ui/select/Select';

type NewMenuItemState = {
  data: NewMenuItemForm
  errors: { [K in keyof NewMenuItemForm]?: string };
}

type CreateMenuItemFormProps = {
  closeModal: () => void;
}

const CreateMenuItemForm: FC<CreateMenuItemFormProps> = ({ closeModal }) => {
  const [newMenuItemState, setNewMenuItemState] = useState<NewMenuItemState>({
    data: {
      name: '',
      description: '',
      price: 0,
      thumbnail: '',
      categoryId: '',
    },
    errors: {},
  });
  const [allCategories, setAllCategories] = useState<Category[]>([]);

  useEffect(() => {
    getAllCategory();
  }, [])

  const getAllCategory = async () => {
    const catsData = await getAllCategoryQuery() as SuccessResponse<Category[]>;

    setNewMenuItemState(prev => ({
      ...prev,
      data: {
        ...prev.data,
        categoryId: catsData.data[0].id
      }
    }));

    setAllCategories(catsData.data)
  }

  // getAllCategoryQuery

  const { data, errors } = newMenuItemState;

  const creatMenuItem = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = await createMenuItemQuery(newMenuItemState.data);

    if (data.success) {
      closeModal();
    }

    const { errorDetails } = data as ErrorResponse;

    setNewMenuItemState(prev => ({
      ...prev,
      errors: extractFieldErrors(errorDetails, ['name', 'thumbnail', 'description', 'price', 'categoryId'])
    }));
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setNewMenuItemState(prev => ({
      errors: {
        ...prev.errors,
        [name]: ''
      },
      data: {
        ...prev.data,
        [name]: value
      }
    }));
  }

  const addMenuItemThumbnail = (newThumbnail: string) => {
    setNewMenuItemState(prev => ({
      errors: {
        ...prev.errors,
        thumbnail: ''
      },
      data: {
        ...prev.data,
        thumbnail: newThumbnail
      }
    }))
  }

  return (
    <form onSubmit={ creatMenuItem } className='create_menu_item_form'>
      <InputLabel
        labelText='Name'
        errorMessage={ errors.name }
      >
        <TextInput
          name='name'
          type='text'
          placeholder='Enter menu item name'
          defaultValue={ data.name }
          onchange={ handleInputChange }
          required
        />
      </InputLabel>
      <InputLabel
        labelText='description'
        errorMessage={ errors.description }
      >
        <TextInput
          name='description'
          type='text'
          placeholder='Enter menu item description'
          defaultValue={ data.description }
          onchange={ handleInputChange }
          required
        />
      </InputLabel>
      <InputLabel
        labelText='description'
        errorMessage={ errors.price }
      >
        <TextInput
          name='price'
          type='number'
          placeholder='Enter menu item price'
          defaultValue={ data.price }
          onchange={ handleInputChange }
          required
        />
      </InputLabel>
      <InputLabel
        labelText='Category'
        errorMessage={ errors.categoryId }
      >
        <Select
          name='categoryId'
          onchange={ handleInputChange }
          value={ data.categoryId }
          required
        >
          {
            allCategories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))
          }
        </Select>
      </InputLabel>
      <InputLabel
        labelText='Category thumbnail'
        errorMessage={ errors.thumbnail }
      >
        <FileInput value={data.thumbnail} addFile={ addMenuItemThumbnail } />
      </InputLabel>
      <Button
        text='Create Menu Item'
        isDark={ false }
      />
    </form>
  )
}

export default CreateMenuItemForm