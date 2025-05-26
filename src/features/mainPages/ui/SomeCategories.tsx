import React from 'react'
import '../styles/someCategories.css';
import Image from 'next/image';
import LinkElement from '@/shared/ui/linkElement/LinkElement';
import { getSomeCategoriesQuery } from '@/entities/category/api/categoryApi';
import { CategoryWithImage } from '@/entities/category/domain';
import { SuccessResponse } from '@/shared/utils/types';

const SomeCategories = async () => {
  const categoriesData = await getSomeCategoriesQuery() as SuccessResponse<CategoryWithImage[]>;

  const categories: CategoryWithImage[] = categoriesData.data;

  return (
    <div className='some_categories_wrapper'>
      <div className='some_categories_header'>
        <h2 className='some_categories_title'>FINEST FOOD & SOME CATEGORIES</h2>
        <p className='some_categories_description'>
          Explore our diverse range of categories, each offering a unique culinary experience. From fresh salads to indulgent desserts, we have something for everyone.
        </p>
      </div>
      <div className='some_categories_list'>
        {categories.map((category, index) => (
          <div key={index} className='some_categories_item'>
            <Image
              src={category.imageUrl}
              width={ 200 }
              height={ 200 }
              alt={category.name}
              className='some_categories_image'
            />
            <div className='some_categories_content'>
              <h3 className='some_categories_title'>{category.name}</h3>
              <LinkElement
                text='VIEW MORE'
                url={`menu?category=${category.id}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SomeCategories