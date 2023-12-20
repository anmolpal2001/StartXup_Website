import React, { useState } from "react";
import Input from "./Input";
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formatDate = (inputDate) => {
  // Assuming inputDate is in the format 'YYYY-MM-DD'
  const formattedDate = format(new Date(inputDate), 'dd/MM/yyyy');
  return formattedDate;
};


const ProjectForm = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    Date: "",
    StartupName: "",
    IndustryVertical: "",
    SubVertical: "",
    CityLocation: "",
    InvestorsName: "",
    InvestmentType: "",
    AmountInUSD: "",
    Remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formattedDate = formatDate(formData.Date);
      const response = await fetch('https://startxup-website-api.onrender.com/api/startups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          Date: formattedDate,
        }),
      });
  
      if (response.ok) {
        console.log('Form submitted successfully');
        setFormData({
          Date: '',
          StartupName: '',
          IndustryVertical: '',
          SubVertical: '',
          CityLocation: '',
          InvestorsName: '',
          InvestmentType: '',
          AmountInUSD: '',
          Remarks: '',
        });

        notify("Form submitted successfully!");
        setTimeout(() => {
          setShowToast(false);
          navigate("/");
        }, 5000); 
      } else {
        notify("Form submission failed");
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };
  const notify = (message) => toast(message);
  return (
    <div className="w-full bg-backgroundColor">
      <div className="w-10/12 h-full bg-white px-14 mx-auto my-24 max-w-screen-2xl">
        <h2 className="md:text-3xl text-xl font-bold md:mb-6 mb-2 text-gray-800 pt-10 pb-5">
          Project Details
        </h2>
        <div className="w-full h-full pb-10">
          <form action="" onSubmit={handleSubmit}>
            <Input
              label="Startup Name"
              type="text"
              name="StartupName"
              value={formData.StartupName}
              onChange={handleChange}
              required
            />
            <Input
              label="Date"
              type="date"
              name="Date"
              value={formData.Date}
              onChange={handleChange}
              required
            />
            <Input
              label="IndustryVertical"
              type="text"
              name="IndustryVertical"
              value={formData.IndustryVertical}
              onChange={handleChange}
              required
            />
            <Input
              label="SubVertical"
              type="text"
              name="SubVertical"
              value={formData.SubVertical}
              onChange={handleChange}
              required
            />
            <Input
              label="CityLocation"
              type="text"
              name="CityLocation"
              value={formData.CityLocation}
              onChange={handleChange}
              required
            />
            <Input
              label="InvestorsName"
              type="text"
              name="InvestorsName"
              value={formData.InvestorsName}
              onChange={handleChange}
              required
            />
            <Input
              label="InvestmentType"
              type="text"
              name="InvestmentType"
              value={formData.InvestmentType}
              onChange={handleChange}
              required
            />
            <Input
              label="AmountInUSD"
              type="number"
              name="AmountInUSD"
              value={formData.AmountInUSD}
              onChange={handleChange}
              required
            />
            <Input
              label="Remarks"
              type="text"
              name="Remarks"
              value={formData.Remarks}
              onChange={handleChange}
            />
            <div className="md:mt-16 mt-10">
              <button onClick={notify} className="w-full rounded-lg bg-blueColor md:py-4 py-3 text-white font-semibold md:font-bold md:text-2xl text-xl ">
                Submit
              </button>
               <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
