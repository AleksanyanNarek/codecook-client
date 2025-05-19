import { redirect } from "next/navigation";

import { loginQuery } from "@/entities/authorization/api/authApi";
import { LoginForm } from "@/entities/authorization/domain";
import { routes } from "@/shared/utils/routes";
import { ErrorResponse } from "@/shared/utils/types";
import { NextResponse } from "next/server";
import { extractFieldErrors } from "@/shared/utils/helpers";

export type LoginActionState = {
  loginData: LoginForm;
  loginErrors: {
    email?: string;
    password?: string;
  };
}

export const loginAction = async (
  prevState: LoginActionState,
  formData: FormData
): Promise<LoginActionState> => {
  const loginData: LoginForm = {
    email: formData.get("email")?.toString() || "",
    password: formData.get("password")?.toString() || ""
  };
    const data = await loginQuery(loginData);

    if (data.success) {
      redirect(routes.homeRoute());
    }

    const { errorDetails } = data as ErrorResponse;

    return {
      loginData,
      loginErrors: extractFieldErrors(errorDetails, ['email', 'password']),
    }
}