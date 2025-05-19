import { ErrorResponse, ResponseDataStructure } from "./types";

export const fetcher = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ResponseDataStructure<T>> => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_API_URL;

  const defaultHeaders = {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${yourToken}`
  };


  try {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
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