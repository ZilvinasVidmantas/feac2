import React from 'react';
import { ApiService } from 'src/services/api-service';

type useApiReturnType<T> = [T | undefined, { isLoading: boolean, error: undefined | Error }]

type Method = 'get' | 'post' | 'put' | 'delete';

export function useApi<T = undefined>(url: string, method: Method) {
  const [data, setData] = React.useState<T | undefined>(undefined);
  const [error, setError] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(function onFirstRender() {
    ApiService[method]<T>(url)
      .then((axiosResponse) => setData(axiosResponse.data))
      .catch((axiosError) => {
        setError(axiosError);
        console.error('API Error:', axiosError);
      })
      .finally(() => setIsLoading(false));
  }, [url]);

  return [
    data,
    {
      isLoading,
      error,
    }
  ] as useApiReturnType<T>;
}
