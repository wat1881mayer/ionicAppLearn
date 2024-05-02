import { useState } from 'react';

export function useStoredState(storageKey: string, defaultState: string) {
  function getInitialState(): string {
    const storedState = localStorage.getItem(storageKey);
    return storedState ?? defaultState;
  }

  const [state, setState] = useState(getInitialState);
  function setAndStoreState(state: string) {
    setState(state);
    localStorage.setItem(storageKey, state);
  }
  return [state, setAndStoreState] as const;
}
