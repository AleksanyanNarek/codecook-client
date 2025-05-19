import { redirect } from "next/navigation";

import { signUpQuery } from "@/entities/authorization/api/authApi";
import { SignUpForm } from "@/entities/authorization/domain";
import { routes } from "@/shared/utils/routes";
import { ErrorResponse } from "@/shared/utils/types";
import { extractFieldErrors } from "@/shared/utils/helpers";

export type SignUpActionState = {
  signUpData: SignUpForm;
  signUpErrors: {
    email?: string;
    name?: string;
    surename?: string;
    phone?: string;
    password?: string;
  };
}

export const signUpAction = async (
  prevState: SignUpActionState,
  formData: FormData
): Promise<SignUpActionState> => {
  const signUpData: SignUpForm = {
    email: formData.get("email")?.toString() || "",
    name: formData.get("name")?.toString() || "",
    surename: formData.get("surename")?.toString() || "",
    phone: formData.get("phone")?.toString() || "",
    password: formData.get("password")?.toString() || ""
  };
    const data = await signUpQuery(signUpData);

    if (data.success) {
      redirect(routes.homeRoute());
    }

    const { errorDetails } = data as ErrorResponse;

    return {
      signUpData,
      signUpErrors: extractFieldErrors(errorDetails, ['email', 'name', 'surename', 'phone', 'password']),
    }
}