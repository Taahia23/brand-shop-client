import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const product = useLoaderData();
    const { _id, name, brandName, image, type, price, rating, description } = product;

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const image = form.image.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const updatedProduct = { name, brandName, image, type, price, rating, description }

        console.log(updatedProduct);

        // send data to the server
        fetch(`https://brand-shop-server-hifw7e8tu-taahia-tahsins-projects.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedProduct)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })





    }

    return (
        <div className="py-24 px-40 bg-[#f1f2f6]">
            <h1 className="text-6xl font-extrabold text-center mb-10">Update </h1>

            <form onSubmit={handleUpdateProduct}>
                {/* form name and brand name row */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input name="name" type="text" defaultValue={name} placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input name="brandName" defaultValue={brandName} type="text" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form image and type row */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input name="image" defaultValue={image} type="text" placeholder="Image" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input name="type" defaultValue={type} type="text" placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form price and rating row */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input name="price" defaultValue={price} type="text" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input name="rating" defaultValue={rating} type="text" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form short description row */}
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input name="description" defaultValue={description} type="text" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>



                </div>
                <input className="mt-10 btn text-xl bg-black text-white hover:text-black font-bold btn-block" type="submit" value="UPDATE PRODUCT" />


            </form>
        </div>
    );
};

export default UpdateProduct;