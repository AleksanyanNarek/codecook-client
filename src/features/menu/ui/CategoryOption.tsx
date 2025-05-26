import React, { FC } from 'react'
import Link from 'next/link';
import '../styles/categoryOptions.css';

import { Category } from '@/entities/category/domain'

type CategoryOptionProps = {
  selectedCategory: string;
  category: Category;
}

const CategoryOption: FC<CategoryOptionProps> = async ({ selectedCategory, category }) => {

  return (
    <Link
      href={`?category=${ category.id }`}
      className={`category_option ${selectedCategory === category.id ? 'selected' : ''}`}
    >
      <div>
        <p>{ category.name }</p>
      </div>
    </Link>
  )
}

export default CategoryOption