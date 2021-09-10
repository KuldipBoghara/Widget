import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const Route = ({ path, children }) => {
  //To rerender the component whenever the link chnage
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  //event Listner fot the "popstate" from the Link component
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    //cleanup function
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
