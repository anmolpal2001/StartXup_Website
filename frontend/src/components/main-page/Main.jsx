import React, { useState, useEffect } from "react";
import NewNavbar from "./NewNavbar";
import FilterSection from "../card-section/FilterSection";
import CardSection from "../card-section/CardSection";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

const Main = () => {
  const [cardDetails, setCardDetails] = useState([]);
  const [originalCardDetails, setOriginalCardDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All-Category");

  const fetchCardDetails = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/startups");
      const data = await response.json();
      setCardDetails(data);
      setOriginalCardDetails(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCardDetails();
  }, []);

  const handleFilterChange = (selectedFilter) => {
    setSelectedFilter(selectedFilter);

    // Apply filter on the original data
    const filteredData =
      selectedFilter === "All-Category"
        ? originalCardDetails
        : originalCardDetails.filter(
            (card) => card.IndustryVertical === selectedFilter
          );

    setCardDetails(filteredData);
  };

  return (
    <>
      <NewNavbar handleFilterChange={handleFilterChange} />
      <HeroSection/>
      <FilterSection onFilterChange={handleFilterChange} />
      <CardSection cardDetails={cardDetails} loading={loading} error={error} />
      <Footer />
    </>
  );
};

export default Main;
