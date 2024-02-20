// import React from 'react';
// import Data from '../Data';
// import {NavLink} from 'react-router-dom';

// const Product = () => {
//   const cardItem = (item) => {
//     return (
//       <div className="card mx-3 my-4" key={item.id} style={{ width: "18rem" }}>
//         <img src={item.image} className="card-img-top"  />
//         <div className="card-body text-center">
//           <h5 className="card-title">{item.title}</h5>
//           <p className="lead">${item.price}</p>
//           <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <div className='container py-5'>
//         <div className='row'>
//           <div className='col-12 text-center'>
//             <h2>PRODUCTS</h2>
//             <hr />
//           </div>
//         </div>
//       </div>
//       <div className='container'>
//         <div className='row'>
//           {Data.map(cardItem)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

import React from 'react';
import Data from '../Data.json'; 
import { NavLink } from 'react-router-dom';
import img1 from '../Images/Apple-iPhone-14-Pro-transformed.png';
import img2 from '../Images/Apple-iPhone-14-Pro-Max-transformed.png';
import img3 from '../Images/Apple-iPhone-12-Pro-transformed.png';
import img4 from '../Images/Apple-iPhone-12-Pro-Max-transformed.png';
import img5 from '../Images/Apple-iPhone-11-Pro-Max-transformed.png';
import img6 from '../Images/Apple-iPhone-11-transformed.png';

const images = [img1, img2, img3, img4, img5, img6];

const Product = () => {
  const cardItem = (item, index) => {
    return (
      <div className="card mx-3 my-4" key={item.id} style={{ width: "18rem" }}>
        <img src={images[index]} className="card-img-top" alt={item.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>
          <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h2>PRODUCTS</h2>
            <hr />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {Data.map((item, index) => cardItem(item, index))}
        </div>
      </div>
    </div>
  );
};

export default Product;
