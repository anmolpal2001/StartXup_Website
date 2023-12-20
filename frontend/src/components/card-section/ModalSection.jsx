import React from 'react';
import { Button, Modal } from 'flowbite-react';

const ModalSection = ({ isOpen, onClose, cardDetail }) => {
  return (
    <Modal className='bg-opacity-60 flex py-24 md:py-0' dismissible show={isOpen} onClick={onClose}>
      <Modal.Header></Modal.Header>
      <Modal.Body>
        <div className="flex gap-10 md:flex-row flex-col">
        <div className="md:w-1/3 w-full  bg-lightBlue h-20 rounded-lg text-center py-4 text-white font-bold text-4xl">
          {cardDetail.StartupName.charAt(0)}
        </div>
          <div className=''>
          <h2 className="text-2xl font-bold mb-4">Startup Name : {cardDetail.StartupName}</h2>
          <p className="text-xl mb-2">Location: {cardDetail.CityLocation}</p>
            <p className="text-xl mb-2">Industry Vertical: {cardDetail.IndustryVertical}</p>
            <p className="text-xl mb-2">Sub Vertical: {cardDetail.SubVertical}</p>
            <p className="text-xl mb-2">Investors Name: {cardDetail.InvestorsName}</p>
            <p className="text-xl mb-2">Investment Type: {cardDetail.InvestmentType}</p>
            <p className="text-xl mb-2">Amount in USD: {cardDetail.AmountInUSD}</p>
            <p className="text-xl mb-2">Date: {cardDetail.Date}</p>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer className='md:hidden'>
        <Button onClick={onClose}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default ModalSection;
