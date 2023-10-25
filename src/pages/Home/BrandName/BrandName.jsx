import { NavLink, useLoaderData } from "react-router-dom";

const BrandName = () => {

    
    const brandName = useLoaderData()
    console.log(brandName);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full p-24 mx-auto">

                {
                    brandName.map(brand => <div className="card mt-10 mb-10 bg-base-100 shadow-xl" key={brand.id}>
                        <figure>
                            <img className="w-[100px] h-[100px]" src={brand.brandImg} alt="" />
                        </figure>
                        <NavLink to={`/brandName/${brand.brandName}`}>

                            <div className="card-body">
                                <h2 className="card text-center font-bold text-2xl">
                                    {brand.brandName}
                                </h2>
                            </div>
                        </NavLink>,
                    </div>)
                }

            </div>
        </div>
    );
};

export default BrandName;