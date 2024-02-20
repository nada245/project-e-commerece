// import React from 'react'
// import { useParams } from 'react-router-dom'
// import Data from '../Data.json'
// const ProductDetails = () => {
//     const priod = useParams();
//     const proDetail = Data.filter(x => x.id === priod.id)
//     const product = proDetail[0];
//     console.log(product)
//     return (
//         <>
//             <div className='container'>
//                 <div className='row'>
//                     <div className='col-md-6'>
//                         <img src={product.img} alt={product.title} />
//                     </div>
//                     <div className='col-md-6'>
//                         <h1>{product.title}</h1>
//                         <hr />
//                         <h2>{product.price}</h2>
//                         <p>{product.desc}</p>
//                         <button className='btn btn-outline-primary'>Add To Cart</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ProductDetails
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react'
import Data from '../Data.json';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/action/index';
const ProductDetails = () => {
    const [cartBtn, setCartBtn] = useState("Add To Cart")
    const { id } = useParams();
    const product = Data.find(item => item.id === parseInt(id));
    const dispatch = useDispatch()
    if (!product) {
        return <div>Product not found</div>;
    }

    
    const handelCart = (product) => {
        if (cartBtn === "Add To Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove From Cart")
        }
        else {
            dispatch(delItem(product))
            setCartBtn("Add To Cart")
        }
    }

    return (
        <div className='container my-5 py-3'>
            <div className='row'>
                <div className='col-md-6 d-flex justify-content-center mx-auto product'>
                    <img src={product.image} alt={product.title} height="400px" />
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-center '>
                    <h1 className='display-5 fw-bold'>{product.title}</h1>
                    <hr />
                    <h2 className='my-4'>${product.price}</h2>
                    <p className='lead'>{product.desc}</p>
                    <button onClick={() => handelCart(product)} className='btn btn-outline-primary my-5'>{cartBtn}</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
