/**
 * API configuration and utilities
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * API response interface
 */
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Array<{ field: string; message: string }>;
  error?: string;
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
    this.name = 'ApiError';
  }
}

/**
 * Fetch wrapper with error handling
 */
async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data: ApiResponse<T> = await response.json();

    if (!response.ok) {
      throw new ApiError(
        data.message || 'An error occurred',
        response.status,
        data.errors
      );
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    // Network or other errors
    throw new ApiError(
      error instanceof Error ? error.message : 'Network error. Please check your connection.',
      0
    );
  }
}

/**
 * Contact form data interface
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Contact API functions
 */
export const contactApi = {
  /**
   * Submit contact form
   */
  async submit(data: ContactFormData): Promise<ApiResponse> {
    return apiFetch<{ id: string; name: string; email: string; createdAt: string }>(
      '/contact',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  },
};

/**
 * Health check
 */
export const healthCheck = async (): Promise<ApiResponse> => {
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  try {
    const response = await fetch(`${baseUrl}/health`);
    return await response.json();
  } catch (error) {
    throw new ApiError('Server is not reachable', 0);
  }
};
