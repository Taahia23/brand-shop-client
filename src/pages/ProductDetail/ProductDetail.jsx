import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetail = () => {

    const products = useLoaderData();
    const { _id, name, image, price,description } = products;


    // extra
    const addToCart = () => {
      console.log(products);
       
        fetch('http://localhost:5000/cart', {
          method: 'POST',
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(products),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if(data.insertedId){
              Swal.fire({
                title: 'Product Added!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
           
          })
          .catch((error) => {
            console.error('Error adding to cart:', error);
          });
      };
      
    // extra
   
   
  



    

    

    return (
        <div>
            <div key={_id} className="card  bg-base-100 shadow-xl p-24">
                <figure><img className="w-1/3" src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl">{name}</h2>
                    <p className="">{description} New colors and fresh textures give you an artisanal AJ1 that keeps the look classic and the feel familiar. This all-time favorite is made of premium materials and decked out with raw edges and contrasting stitching.New colors and fresh textures give you an artisanal AJ1 that keeps the look classic and the feel familiar. This all-time favorite is made of premium materials and decked out with raw edges and contrasting stitching.New colors and fresh textures give you an artisanal AJ1 that keeps the look classic and the feel familiar. This all-time favorite is made of premium materials and decked out with raw edges and contrasting stitching.</p>
                    <h1 className="text-3xl font-extrabold text-red-700">${price}</h1>
        
                    <div className="card-actions justify-start">
                        {/* <button className="btn btn-primary font-extrabold">Add to Cart</button> */}
                       <Link to={'/myCart'}>
                       <button onClick={()=>addToCart()}  className="btn btn-primary font-extrabold">Add to Cart</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;