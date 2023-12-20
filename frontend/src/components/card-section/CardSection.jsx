import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardSection = ({ cardDetails: initialCardDetails, loading, error }) => {
  const [cardDetails, setCardDetails] = useState(initialCardDetails);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    setCardDetails(initialCardDetails);
    setCurrentPage(1);
  }, [initialCardDetails]);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-3xl font-semibold text-white">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-3xl font-semibold">Error fetching data...</h1>
      </div>
    );
  }
  

  const totalPages = Math.ceil(cardDetails.length / itemsPerPage);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page items
  const currentItems = cardDetails.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div id="cardSection" className="lg:w-11/12 mt-24 md:mt-0 w-full h-full mx-auto max-w-screen-2xl lg:px-14 md:px-10 px-8 pb-12">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
        {currentItems.map((cardDetail) => (
          <div key={cardDetail.SNo} className="w-full">
            <Card cardDetail={cardDetail} />
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-16'>
        <button className="bg-lightGreyish hover:bg-blueColor hover:text-white px-4 py-2 rounded-lg text-lg md:text-xl font-medium" onClick={handlePrevPage} style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer', opacity: currentPage === 1 ? 0.5 : 1 }} disabled={currentPage === 1}>
          Prev
        </button>
        <span className='mx-4 text-white md:text-xl text-sm md:px-12 px-6 py-2'>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} className="bg-lightGreyish hover:bg-blueColor hover:text-white px-4 md:py-1 rounded-lg text-lg md:text-xl font-medium" style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', opacity: currentPage === 1 ? 0.5 : 1 }} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CardSection;
