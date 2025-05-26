'use server';
import { cookies } from "next/headers";
import { ErrorResponse, ResponseDataStructure } from "./types";

export const authFetcher = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ResponseDataStructure<T>> => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL;

  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...(
      refreshToken ? ({
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        RefreshToken: refreshToken,
      }) : {}
    ),
  };

  try {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
      credentials: 'include',
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));

      throw errorData;
    }

    return res.json();
  } catch (error: unknown) {
    const errorResponse = error as ErrorResponse;

    return errorResponse
  }
};