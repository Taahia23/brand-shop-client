import video from '../../../assets/video_levis.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Video = () => {

    useEffect(() => {
        Aos.init();
      }, [])
    
    return (
        <div className="flex flex-col md:flex-row justify-between mt-20 p-32">
            <video width="650" height="400" loop autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>
            <div className='flex flex-col justify-center items-center text-left'>
                <h1 data-aos = "fade-up" className="text-5xl font-extrabold border-b-4 border-gray-100">THE SEASON’S <br /> COMFIEST TOPS</h1>


               
                <p data-aos = "fade-down" className='text-xl text-center mt-10 mb-10'>We love our Long Sleeve Relaxed Thermal for the vibes, <br /> but you really can't go wrong with our thermals or any of <br /> our other tops.</p>
                <button data-aos = "zoom-in" className="btn btn-outline btn-ghost "><span className='font-extrabold'>SHOP NOW</span></button>
            </div>
        </div>
    );
};

export default Video;