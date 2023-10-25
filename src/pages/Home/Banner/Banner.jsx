import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const Banner = () => {
    useEffect(() => {
        Aos.init();
    },[])
    
    return (
        <div className=" relative">

            <img className="md:w-full mt-5 md:h-[700px]" src="https://i.ibb.co/Qr1JG21/banner.jpg" alt="" />
            <div className="absolute top-20 md:top-40 md:left-[450px]">
                <h1 className="text-2xl text-center text-white font-semibold border-y-white border-t-4 border-b-4 p-2 tracking-[.5em] " data-aos ="fade-down"  >STYLE SERIES</h1>

                <h1 data-aos ="fade-up" className="mt-11 text-2xl md:text-7xl text-white font-bold">LOOK WE LOVE</h1>

                <div className="mt-20 hidden md:block">
                    <div className="input-group">
                        <select className="select select-bordered w-full">
                            <option disabled selected>Pick category</option>
                            <option className="text-xl font-semibold p-5 mb-5 mt-5">Nike</option>
                            <option className="text-xl font-semibold p-5 mb-5 mt-5">Adidas</option>
                            <option className="text-xl font-semibold p-5 mb-5 mt-5">Gucci</option>
                            <option className="text-xl font-semibold p-5 mb-5 mt-5">Zara</option>
                            <option className="text-xl font-semibold p-5 mb-5 mt-5">H&M</option>
                            <option className="text-xl font-semibold p-5 mb-5 mt-5">Lavis</option>
                        </select>
                        <button className="btn">Go</button>
                    </div>
                  
                </div>

            </div>
        </div>
    );
};

export default Banner;