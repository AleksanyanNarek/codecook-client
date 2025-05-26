import { ErrorDetails } from "./types";

export function extractFieldErrors<T extends string>(
  errorDetails: ErrorDetails | undefined,
  fields: T[]
): Partial<Record<T, string>> {
  if (!errorDetails) return {};

  return fields.reduce((acc, field) => {
    const messages = errorDetails?.[field];

    if (messages && messages.length > 0) {
      acc[field] = messages.join(', ');
    }

    return acc;
  }, {} as Partial<Record<T, string>>);
}