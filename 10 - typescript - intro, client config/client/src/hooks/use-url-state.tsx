import React from 'react';

export const useUrlState = (name: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  const urlValue = searchParams.get(name);

  const [state, setState] = React.useState(urlValue || value);

  const updateUrl = React.useCallback(function updateUrl(newValue: string) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(name, newValue);
    window.history.pushState({}, '', `${window.location.pathname}?${searchParams}`);
  }, [name]);

  React.useEffect(function onStateChange() {
    updateUrl(state);
  }, [state, updateUrl]);

  return [state, setState]  as [string, (value: string) => void];
}