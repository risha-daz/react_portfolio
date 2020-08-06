import React, { Fragment } from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <Fragment>
      <div className='container bg-gray-200 font-light text-gray-700 w-11/12 mb-16 mx-auto'>
        <section className='flex flex-col md:flex-row items-center border-b-4 py-12'>
          <h4 className='md:w-1/6 font-bold uppercase p-4 text-center md:text-right md:pr-12'>
            Address
          </h4>
          <p className='w-5/6 text-center md:text-left'>
            A.P.J Abdul Kalam Hostel IIT Indore, Simrol
            <br />
            Madhya Pradesh, India
          </p>
        </section>
        <section className='flex flex-col md:flex-row items-center border-b-4 py-12'>
          <h4 className='md:w-1/6 font-bold uppercase p-4 text-center md:text-right md:pr-12'>
            Contact us
          </h4>
          <p className='w-5/6 text-center md:text-left'>+91 98765 43210</p>
        </section>
        <section className='flex flex-col md:flex-row items-center border-b-4 py-12'>
          <h4 className='md:w-1/6 font-bold uppercase p-4 text-center md:text-right md:pr-12'>
            Email
          </h4>
          <p className='w-5/6 text-center md:text-left'>abc@123.com</p>
        </section>
        <section className='flex flex-col md:flex-row items-center py-12'>
          <h4 className='md:w-1/6 font-bold uppercase p-4 text-center md:text-right md:pr-12'>
            Social
          </h4>
          <div className='text-center md:text-left'>
            <SocialIcons stl='700' />
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Footer;
