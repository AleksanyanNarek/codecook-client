import { fetcher } from "@/shared/utils/fetcher";
import { MENU_ITEMS_ENDPOINT } from "../utils/endpoints";

import { MenuItem, NewMenuItemForm } from "../domain";

export async function createMenuItemQuery(newMenuItemData: NewMenuItemForm) {
  const res = await fetcher<MenuItem>(MENU_ITEMS_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(newMenuItemData),
  });

  return res;
}

export async function getAllMenuItemsQuery(categoryId: string) {
  const res = await fetcher<MenuItem[]>(
    `${MENU_ITEMS_ENDPOINT}?categoryId=${categoryId}`,
    {
      method: 'GET',
    }
  );

  return res;
}