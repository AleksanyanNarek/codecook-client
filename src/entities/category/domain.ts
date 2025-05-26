export type CategoryWithImage = {
    id: string;
    name: string;
    imageUrl: string;
}

export type Category = {
    id: string;
    name: string;
}

export type NewCategoryForm = {
    name: string;
    thumbnail: string;
}