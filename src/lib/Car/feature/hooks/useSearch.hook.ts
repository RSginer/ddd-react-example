import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>();
  const [debouncedSearchQuery] = useState(() => debounce(setSearchQuery, 500));

  useEffect(() => {
    return () => {
      debouncedSearchQuery.cancel();
    };
  }, [debouncedSearchQuery]);

  return {
    searchQuery,
    debouncedSearchQuery,
  };
};
