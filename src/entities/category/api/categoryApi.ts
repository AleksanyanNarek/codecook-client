import { fetcher } from "@/shared/utils/fetcher";
import { CATEGORY_ENDPOINT, GET_MAIN_CATEGORY_ENDPOINT } from "../utils/endpoints";

import { CategoryWithImage, Category, NewCategoryForm } from "../domain";

export async function createCategoryQuery(newCategoryData: NewCategoryForm) {
  const res = await fetcher<CategoryWithImage>(CATEGORY_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(newCategoryData),
  });

  return res;
}

export async function getAllCategoryQuery() {
  const res = await fetcher<Category[]>(CATEGORY_ENDPOINT, {
    method: 'GET',
  });

  return res;
}

export async function getSomeCategoriesQuery() {
  const res = await fetcher<CategoryWithImage[]>(GET_MAIN_CATEGORY_ENDPOINT, {
    method: 'GET',
  });

  // if (!res.success) return;

  return res;
}