import React from 'react';

export const useFetch = (url) => {
  const [data, setData] = React.useState(undefined);
  const [error, setError] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(function onFirstRender() {
    fetch(url)
      .then(response => response.json())
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
  ];
}
