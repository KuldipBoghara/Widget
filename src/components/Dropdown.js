import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyclick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyclick, { capture: true }); //For React v17 add this

    return () => {
      document.body.removeEventListener('click', onBodyclick, {
        capture: true
      });
    };
  }, []);

  const renderesOptions = options.map((option) => {
    //remove the item from the list if its alrady selected
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderesOptions}
          </div>
        </div>
      </div>
      {/* <p style={{ color: selected.value }}>This text is {selected.value}</p> */}
    </div>
  );
};

export default Dropdown;
