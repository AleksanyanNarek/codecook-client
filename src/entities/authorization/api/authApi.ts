import { fetcher } from "@/shared/utils/fetcher";
import { LOGIN_ENDPOINT, SIGN_UP_ENDPOINT } from "../utils/endpoints";

import { LoginForm, SignUpForm } from "../domain";

export async function loginQuery(loginData: LoginForm) {
  const res = await fetcher<LoginForm>(LOGIN_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(loginData),
  });

  return res;
}

export async function signUpQuery(signUpData: SignUpForm) {
  const res = await fetcher<SignUpForm>(SIGN_UP_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(signUpData),
  });

  return res;
}