import React from 'react';

type useFetchReturnType<T> = [T | undefined, { isLoading: boolean, error: undefined | Error }]

export function useFetch<T>(url: string) {
  const [data, setData] = React.useState<T | undefined>(undefined);
  const [error, setError] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(function onFirstRender() {
    fetch(url)
      .then(response => response.json() as Promise<T>)
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [url]);

  return [
    data,
    {
      isLoading,
      error,
    }
  ] as useFetchReturnType<T>;
}
