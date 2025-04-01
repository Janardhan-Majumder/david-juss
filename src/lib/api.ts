const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
interface FetchOptions extends RequestInit {
  next?: {
    revalidate?: number;
  };
}
export async function fetchGetApi(
  endpoint: string,
  options: FetchOptions = {}
) {
  const url = `${apiUrl}${endpoint}`;
  const config: RequestInit & { next?: { revalidate?: number } } = {
    ...options,
    next: options.next || { revalidate: 10 },
  
  };
  const response = await fetch(url, config);
  return response?.json();
}



export async function muFetchApi(
  endpoint: string,
  method: "POST" | "PUT" | "DELETE",
  data?: Record<string, any> | FormData,
  isFormData: boolean = false
) {
  const url = `${apiUrl}${endpoint}`;

  const headers: HeadersInit = isFormData
    ? {} // Let the browser set "Content-Type" for FormData
    : { "Content-Type": "application/json" };

  const body = isFormData ? (data as FormData) : JSON.stringify(data);

  const response = await fetch(url, {
    method,
    headers,
    body,
  });

  return response.json();
}