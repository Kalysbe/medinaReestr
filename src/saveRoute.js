import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SaveCurrentLocation = () => {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('lastVisitedPath', location.pathname);
  }, [location]);

  return null;
};

export default SaveCurrentLocation;
