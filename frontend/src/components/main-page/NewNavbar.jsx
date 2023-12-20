import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import {Link, useNavigate} from 'react-router-dom';
import { FaXmark, FaBars } from "react-icons/fa6";
import Dropdown from "./Dropdown";

const NewNavbar = ({ handleFilterChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All-Category");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const submitProjectHandler = () => {
    navigate("/submit-project");
  }
  
  const handleDropdownClick = () => {
    if (window.innerWidth <= 768) {
      navigate("/");
      toggleMenu();
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFilterChangeInternal = (value) => {
    setSelectedFilter(value);
    handleFilterChange(value);
  };


  const navItems = [{ link: "All Categories", path: "allCateogry" }];

  return (
    <header className="w-full bg-backgroundColor md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 bg-backgroundColor duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between">
          <Link to="/">
            <img
              src={logo}
              alt=""
              className="w-3/4 inline-block items-center md:w-full"
            />
          </Link>

          <div className="space-x-12 hidden md:flex items-center">
            <button onClick={submitProjectHandler} className="bg-blueColor font-semibold text-white py-3 px-5 transition-all duration-300 rounded hover:bg-lightBlue">
              Submit your project
            </button>
          </div>

          {/* menu btn for only mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-500 mt-6 md:mt-8"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-white" />
              ) : (
                <FaBars className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-12 bg-backgroundColor ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          
          <Dropdown
        options={[
          "All-Category",
          "Technology",
          "Consumer Internet",
          "Finance",
          "Logistics",
          "Food & Beverage",
          "ECommerce",
          "Education",
          "Real Estate",
          "Food Delivery Platform",
          "Mobile Fitness App",
        ]}
        selectedOption={selectedFilter}
        onChange={handleFilterChangeInternal}
        onToggleMenu={toggleMenu}
        onClick={handleDropdownClick}
      />
          

          <button onClick={submitProjectHandler} className="bg-blueColor w-full font-semibold text-white py-3 px-5 transition-all duration-300 rounded hover:bg-lightBlue">
            Submit your project
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NewNavbar;
