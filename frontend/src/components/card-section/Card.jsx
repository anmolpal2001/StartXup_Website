import React,{useState} from "react";
import Modal from "./Modal";
import ModalSection from "./ModalSection";

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function extractYearFromDate(dateString) {
  const [day, month, year] = dateString.split('/');
  const dateObject = new Date(`${month}/${day}/${year}`);
  return dateObject.getFullYear();
}

const Card = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const hasDate = props.cardDetail.Date !== '';

  const hasAmount = props.cardDetail.AmountInUSD !== '';

  const startupInitial = props.cardDetail.StartupName.charAt(0);
  const startupColor = generateRandomColor();

  return (
    <div>
      <div className="w-full bg-lightGreyish h-20 relative flex justify-center rounded-tl-lg rounded-tr-lg">
        <div className="absolute w-20 h-20 rounded-full -bottom-10 text-center py-4 text-white font-bold text-4xl" style={{ backgroundColor: startupColor }}>
        {startupInitial}
        </div>
      </div>
      <div className="bg-white pt-16 flex justify-center items-center flex-col gap-2 pb-10">
        <h3 className="text-3xl font-bold text-center text-black px-5">
          {props.cardDetail.StartupName}
        </h3>
        <p className="text-2xl font-medium"><span>Location : </span>{props.cardDetail.CityLocation}</p>
        { hasDate ? <p className="text-2xl font-medium"><span>Year : </span>{extractYearFromDate(props.cardDetail.Date)}</p> : <p className="text-2xl font-medium">_ _</p>}
        { hasAmount ? <p className="text-2xl font-medium"><span>Amount : </span>{props.cardDetail.AmountInUSD}</p> : <p className="text-2xl font-medium">_ _</p> }
      </div>
      <button onClick={openModal} className="bg-blueColor w-full py-3 rounded-bl-lg rounded-br-lg text-white font-semibold text-xl">
        View More
      </button>
      <ModalSection isOpen={isModalOpen} onClose={closeModal} cardDetail={props.cardDetail} />
    </div>
  );
};

export default Card;
