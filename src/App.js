import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framwork'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating componenyts'
  }
];

const options = [
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'The color Green',
    value: 'green'
  },
  {
    label: 'The shade of blue',
    value: 'blue'
  }
];

// (1st way) One of the way for navigation (define function and call it from return)
/* const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === '/list') {
    return <Search />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />;
  }
}; */

export default () => {
  const [selected, setSelected] = useState(options[0]);
  //const [showDropdown, setShowDropdown] = useState(true);  (only to understand the need of cleanup function)

  return (
    <div>
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
                              Toggle Dropdown
                            </button>     
                        {showDropdown ? (
                          <Dropdown
                                selected={selected}
                                onSelectedChange={setSelected}
                                options={options}
                              />
                            }) : null} */}

      {
        //callinf of functions for navigation (1st way)
        /*    {showAccordion()}
              {showList()}
              {showDropdown()}
              {showTranslate()} */
      }
      <Header />

      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
