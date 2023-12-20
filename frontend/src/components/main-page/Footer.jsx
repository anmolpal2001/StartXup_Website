import React from 'react'
import logo from "../../assets/logo.png";
import { BsInstagram,BsTwitter,BsGithub,BsFacebook,BsLinkedin } from "react-icons/bs";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-screen mt-8 bg-[#181818] md:mt-10 lg:mt-16 xl:mt-20">
	<div className="w-full px-4 md:px-5 lg:px-8 py-5 md:py-8">
		<div className="flex flex-col items-center justify-center gap-3">
    <Link to={"/"}>
            <img
              src={logo}
              alt=""
              className="inline-block items-center md:w-full"
            />
          </Link>
			<div>
				<ul className="flex gap-4 flex-wrap items-center justify-center mb-4">
            <Link target='_blank' to={"https://www.facebook.com/anmol.pal.3958914/"} className="outline-icon w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-3xl"><BsFacebook size={25}/></Link>
            <Link target='_blank' to={"https://twitter.com/AnmolPa60183901"} className="outline-icon w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-3xl"><BsTwitter size={25}/></Link>
            <Link target='_blank' to={"https://www.instagram.com/mr.pal_30/"} className="outline-icon w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-3xl"><BsInstagram size={25}/></Link>
            <Link target='_blank' to={"https://www.linkedin.com/in/anmol-pal-357506211/"} className="outline-icon w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-3xl"><BsLinkedin size={25}/></Link>
            <Link target='_blank' to={"https://github.com/anmolpal2001"} className="outline-icon w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-3xl"><BsGithub size={25}/></Link>
				</ul>
			</div>
		</div>
		<div className="flex flex-col gap-8 items-center justify-center pt-1">
			<div className="flex flex-col gap-4 items-center lg:items-start ">
				<ul className="flex md:flex-row flex-col gap-4 md:gap-5 text-white">
					<li className="hover:text-acent"><a href="#">About</a></li>
					<li className="hover:text-acent"><a href="#">Privacy Policy</a></li>
					<li className="hover:text-acent"><a href="#">Terms & Conditions</a></li>
					<li className="hover:text-acent"><a href="#l">Contact Us</a></li>
					<li className="hover:text-acent"><a href="#">FAQs</a></li>
				</ul>
				<p className="text-white self-center">©2023 StartXup All rights reserved.</p>
			</div>
		</div>
	</div>
</footer>
  )
}

export default Footer