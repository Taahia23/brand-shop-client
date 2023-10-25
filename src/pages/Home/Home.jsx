
import Banner from "./Banner/Banner";
import { FaWallet } from 'react-icons/fa';
import { FaShippingFast } from 'react-icons/fa';
import { GiReturnArrow } from 'react-icons/gi';
import { useLoaderData } from "react-router-dom";

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Video from "./Video/Video";
import BrandName from "./BrandName/BrandName";







const Home = () => {


  useEffect(() => {
    Aos.init();
  }, [])

  

  return (
    <div className=" mx-auto">

      <Banner></Banner>

      <BrandName></BrandName>

      


        <Video></Video>


      {/* newsletter */}
      <div className="relative hidden md:block">
        <img className="w-full h-[400px] mt-36" src="https://i.ibb.co/xD17F5g/new.jpg" alt="" />
        <div className="absolute top-20 right-32">
          <h1 className="text-4xl font-extrabold">NEWSLETTER</h1>
          <p className="text-xl font-base my-3">
            Enjoy 15% off your next purchase when you join our mailing list!
          </p>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Your Email</span>
            </label>
            <label className="input-group">
              <span>Email</span>
              <input type="text" placeholder="Enter Your Email...." className="input input-bordered w-full" />
            </label>
          </div>
        </div>
      </div>




      <div className="grid grid-cols-1 md:grid-cols-3  md:max-w-7xl mx-auto md:my-36" data-aos = "fade-up">
        <div className="flex gap-4 border-2 p-10">
          <FaWallet className="w-16 h-10"></FaWallet>
          <h1 className="text-3xl font-medium">We are here to help!</h1>
        </div>
        <div className="flex gap-4 border-2 p-10 md:ml-5">
          <FaShippingFast className="w-16 h-10"></FaShippingFast>
          <h1 className="text-3xl font-medium">Free Standard Shipping</h1>
        </div>
        <div className="flex gap-4  border-2 p-10 md:ml-5">
          <GiReturnArrow className="w-16 h-10"></GiReturnArrow>
          <h1 className="text-3xl font-medium">100% Back to Money</h1>
        </div>
      </div>

    
        



    </div>
  );
};

export default Home;