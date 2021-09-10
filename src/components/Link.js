import React from 'react';

//The main object of Link component is create the link and navigation event (to let the Route component know that the URL has been changed)
const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    //this is built in function of the browser to chnage the URL
    window.history.pushState({}, '', href);

    //communicate over through the Route component that the URL just changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
