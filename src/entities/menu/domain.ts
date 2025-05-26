export type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    categoryId: string;
}

export type NewMenuItemForm = {
    name: string;
    description: string;
    price: number;
    thumbnail: string;
    categoryId: string;
}