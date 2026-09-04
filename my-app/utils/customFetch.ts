const BASE_URL = "https://jsonplaceholder.typicode.com/";

type RequestMethods = 'GET'|'POST'|'PUT'|'PATCH'|'DELETE'

type RequestOptions = {
  method?: RequestMethods;
  body?: object;
  path: string;
};

export const customFetch = async ({
  method = "GET",
  body,
  path,
}: RequestOptions) => {
  try {
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (method !== "GET" && body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}${path}`, options);

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};