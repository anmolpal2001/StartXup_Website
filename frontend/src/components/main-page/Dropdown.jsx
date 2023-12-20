import React, { useState } from "react";
import { IoMdArrowDropdown  } from "react-icons/io";

import { Link } from "react-scroll";

const Dropdown = ({ options, selectedOption, onChange,onToggleMenu  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    // onToggleMenu(!isOpen);
  };

  const handleOptionClick = (value) => {
    onChange(value);
    setIsOpen(false);
    onToggleMenu(false);
  };

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <button
          type="button"
          onClick={handleToggle}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {selectedOption}
          <IoMdArrowDropdown  className="absolute right-10" size={25}/>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <Link 
              key={option} 
        smooth={true}
        to="cardSection"
        spy={true}
        >
              <div
                key={option}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                onClick={() => handleOptionClick(option)}
                role="menuitem"
              >
                {option}
              </div>
                </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
