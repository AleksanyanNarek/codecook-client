type ErrorDetails = Record<string, string[]>

export type SuccessResponse<T> = {
  success: true;
  message: string;
  data?: T;
}

export type ErrorResponse = {
  success: false;
  message: string;
  errorDetails?: ErrorDetails;
}

export type ResponseDataStructure<T> = SuccessResponse<T> | ErrorResponse