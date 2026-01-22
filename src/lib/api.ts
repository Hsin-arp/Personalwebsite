// lib/api.ts

/**
 * API response interface
 */
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Array<{ field: string; message: string }>;
}

/**
 * API error class
 */
export class ApiError extends Error {
  constructor(
    public message: string,
    public status: number = 500,
    public errors?: Array<{ field: string; message: string }>
  ) {
    super(message);
    this.name = "ApiError";
  }
}

/**
 * Generic fetch wrapper
 */
async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const config: RequestInit = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  };

  try {
    // ✅ RELATIVE PATH — WORKS ON VERCEL
    const res = await fetch(`/api${endpoint}`, config);
    const data: ApiResponse<T> = await res.json();

    if (!res.ok) {
      throw new ApiError(
        data.message || "An error occurred",
        res.status,
        data.errors
      );
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) throw error;

    throw new ApiError(
      error instanceof Error
        ? error.message
        : "Network error. Please try again later.",
      0
    );
  }
}

/**
 * Contact form interface
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Contact API
 */
export const contactApi = {
  async submit(data: ContactFormData) {
    return apiFetch<{ id: string }>(`/contact`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};
