import { authFetcher } from "@/shared/utils/authFetcher";
import { CURRENT_USER_ENDPOINT } from "../utils/endpoints";

import { User } from "../domain";

export async function getCurrentUserQuery() {
  const res = await authFetcher<User>(CURRENT_USER_ENDPOINT, {
    method: 'GET',
  });

  return res;
}