import { useEffect, useState } from 'react';

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(false); // Initialize with false

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Function to update state based on media query
    const handleChange = () => {
      setMatches(matchMedia.matches);
    };

    // Set the initial state
    handleChange();

    // Add event listener for changes
    if (matchMedia.addListener) { // Deprecated but included for backward compatibility
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    // Cleanup function
    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [query]);

  return matches;
}
