import React from 'react'
import '../styles/someCategories.css';

const SomeCategories = () => {
  const categories = [
    {
      name: 'Salads',
      imageUrl: 'https://res.cloudinary.com/dvdek29md/image/upload/v1747699047/CodeCook/main/main-home-img-7_rjdkd9.jpg',
      decription: 'Fresh and healthy salads made with seasonal ingredients.',
    },
    {
      name: 'Desserts',
      imageUrl: 'https://res.cloudinary.com/dvdek29md/image/upload/v1747699071/CodeCook/main/main-home-img-5_qypbyx.jpg',
      decription: 'Indulge in our delicious desserts, crafted with love and care.',
    },
    {
      name: 'Drinks',
      imageUrl: 'https://res.cloudinary.com/dvdek29md/image/upload/v1747699105/CodeCook/main/main-home-img-6_olevue.jpg',
      decription: 'Refreshing drinks to complement your meal and quench your thirst.',
    },
    {
      name: 'Hot Dishes',
      imageUrl: 'https://res.cloudinary.com/dvdek29md/image/upload/v1747699139/CodeCook/main/main-home-blog-img-1_ht5srt.jpg',
      decription: 'Savor our hot dishes, prepared with the finest ingredients and spices.',
    },
  ]

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
            <img src={category.imageUrl} alt={category.name} className='some_categories_image' />
            <div className='some_categories_content'>
              <h3 className='some_categories_title'>{category.name}</h3>
              <p className='some_categories_description'>{category.decription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SomeCategories