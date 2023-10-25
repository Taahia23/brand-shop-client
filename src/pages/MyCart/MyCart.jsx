
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCart = () => {
    const carts = useLoaderData();
    console.log(carts);

    const { _id, name, image, price, description } = carts;

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE'
                   
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }












    return (
        <div className='max-w-6xl mx-auto mt-20'>
            <h1 className='text-5xl text-center font-bold my-20'>My Products</h1>


            <div className='grid grid-cols-1 md:grid-cols-3 '>
                {
                    carts.map(cart => <div key={cart._id} className="card w-80 bg-base-100 shadow-xl mb-10">
                        <figure><img className='w-80 h-80' src={cart.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{cart.name}</h2>
                            <p>{cart.description}</p>
                            <div className="card-actions justify-end">

                                <button onClick={() => handleDelete(cart._id)} className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>











    );
};

export default MyCart;