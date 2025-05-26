import React, { FC } from 'react'

import Layout from '../ui/Layout'
import CategoryOptions from '../ui/CategoryOptions';
import MenuList from '../ui/MenuList';

import { getAllMenuItemsQuery } from '@/entities/menu/api/menuItemApi';
import { MenuItem } from '@/entities/menu/domain';
import { SuccessResponse } from '@/shared/utils/types';

type MenuPageProps = {
    selectedCategory: string;
}

const MenuPage: FC<MenuPageProps> = async ({ selectedCategory }) => {
    const menuItemsData = await getAllMenuItemsQuery(selectedCategory) as SuccessResponse<MenuItem[]>;

    const menuItems = menuItemsData.data;

    return (
        <Layout
            categories={ <CategoryOptions selectedCategory={ selectedCategory } />}
            menuList={ <MenuList menuItems={ menuItems } />}
        />
    )
}

export default MenuPage