import React, { ReactElement, useEffect, useState } from 'react';
import { useDebounce } from 'react-use';
import { Preloader as PreloaderComponent } from 'components';

const DefaultPreloader = PreloaderComponent;

type UsePreloaderResult = {
  isLoaded: boolean;
  Preloader: ReactElement;
};

const PRELOADER_DEFAULT_TIMEOUT = 150;

const usePreloader = (isLoaded: boolean): UsePreloaderResult => {
  const Component = DefaultPreloader;
  const timeout = PRELOADER_DEFAULT_TIMEOUT;

  const [debouncedIsLoaded, setDebouncedIsLoaded] = useState(isLoaded);

  useDebounce(
    () => {
      if (isLoaded) {
        setDebouncedIsLoaded(true);
      }
    },
    timeout,
    [isLoaded],
  );

  useEffect(
    () => {
      if (debouncedIsLoaded && !isLoaded) {
        setDebouncedIsLoaded(false);
      }
    },
    [debouncedIsLoaded, isLoaded],
  );

  const Preloader = (
    <Component />
  );

  return {
    isLoaded: debouncedIsLoaded,
    Preloader,
  };
};

export { usePreloader };
