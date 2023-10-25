import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';


import { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";



const BrandProduct = () => {

    const { brandName } = useParams();
    const [product, setProduct] = useState();



    const products = useLoaderData()
    // console.log(products);



    useEffect(() => {
        const findProduct = products?.filter(product => product.brandName === brandName);
        setProduct(findProduct);


    }, [brandName, products])

    return (
        <div>
         

            <h1 className='text-5xl text-center py-20 font-extrabold'>Grap Your Fav One </h1>

            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-96"
            >
                <SwiperSlide className='max-h-96 px-10 '><img className='w-full h-auto' src="https://i.ibb.co/hHqvrfj/s111.png" alt="" /></SwiperSlide>

                <SwiperSlide className='max-h-96 px-10 '><img className='w-full h-auto' src="https://i.ibb.co/qDs1pzz/s22.png" alt="" /></SwiperSlide>

                <SwiperSlide className='max-h-96 px-10 '><img className='w-full h-auto' src="https://i.ibb.co/jkQwHWh/s33.png" alt="" /></SwiperSlide>

                <SwiperSlide className='max-h-96 px-10 '><img className='w-full h-auto' src="https://i.ibb.co/cNKgKBC/s44.png" alt="" /></SwiperSlide>


            </Swiper>


            {
                product && product.length > 0 ? (
                    <div className="mb-32 mt-32 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto">

                        {
                            product?.map(productItem => (

                                <>
                                    <div key={productItem._id} className="card w-[400px] bg-base-100 shadow-xl mb-20">
                                        <figure>
                                            <img className="w-[400px] h-[400px]" src={productItem.image} alt="" />
                                        </figure>
                                        <div className="p-5">
                                            <h2 className="card-title font-extrabold text-xl ">{productItem.name}</h2>
                                            <h2 className="card-title font-bold">{productItem.brandName}</h2>
                                            <h2 className="card-title">{productItem.type}</h2>
                                            <h2 className="card-title">${productItem.price}</h2>
                                            <h2 className="card-title"><span className="text-yellow-400">Rating</span>: {productItem.rating} / 5</h2>
                                            <div className="btn-group flex justify-center gap-20 mb-5 mt-10">
                                                {/* <button className="btn hover:bg-blue-900 hover:text-white font-extrabold">Detail</button> */}
                                                <Link to={`/detail/${productItem._id}`}>
                                                <button className="btn hover:bg-blue-900 hover:text-white font-extrabold">Detail</button>
                                                </Link>
                                                <Link to={`/updateProduct/${productItem._id}`}>
                                                <button className="btn hover:bg-blue-900 hover:text-white font-extrabold">Update</button>
                                                </Link>
                                               
                                            </div>
                                        </div>

                                    </div>
                                </>


                            ))
                        }
                    </div>
                )
                    :
                    <div className="mx-auto my-20">
                        <h1 className="text-center text-6xl font-bold ">No Products Available Now!</h1>
                        <img className="w-[500px] mx-auto" src="https://i.ibb.co/NKRXqqT/2953962.jpg" alt="" />
                    </div>


            }
            
        </div>
    );
};

export default BrandProduct;