import React, { useState } from 'react';
import NewNavbar from '../main-page/NewNavbar';
import HeroSection from '../main-page/HeroSection';
import ProjectForm from './ProjectForm';
import Footer from '../main-page/Footer';

const SubmitProject = () => {
  
  return (
    <>
    <NewNavbar/>
    <HeroSection/>
    <ProjectForm/>
    <Footer />
    </>
  );
};

export default SubmitProject;
