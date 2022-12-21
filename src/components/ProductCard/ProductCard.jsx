import React, { useState } from "react";
import "./ProductData.scss";

// const ProductData = ({ product }) => {
//   return (
//     <div className="product-card">
//       <img
//         src={product.image_url}
//         alt={product.name}
//         className="product-image"
//       />
//       <h2 className="product-name">{product.name}</h2>
//       <p className="product-description">{product.description}</p>
//       <p className="product-price">${product.price}</p>
//     </div>
//   );
// };
const ProductData = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  //   return (
  //     <div className="product-card">
  //       <img
  // src="https://www.w3schools.com/html/pic_trulli.jpg"
  // alt="product.name"
  //         className="product-image"
  //       />
  //       <h2 className="product-name">product.name</h2>
  //       <p className="product-description">
  // orem Ipsum is simply dummy text of the printing and typesetting
  // industry. Lorem Ipsum has been the industry's standard dummy text ever
  // since the 1500s, when an unknown printer took a galley of type and
  // scrambled it to make a type specimen book.
  //       </p>
  //       <p className="product-price">$4000</p>
  //     </div>
  //   );
  return (
    <div className="product-card">
      <img
        src="https://www.w3schools.com/html/pic_trulli.jpg"
        alt="product.name"
        className="product-image"
      />
      <div className="product-info">
        <h2 className="product-name">product.name</h2>
        <p className="product-price">$400</p>
      </div>
      <a
        className="toggle-description-link"
        onClick={(e) => {
          e.preventDefault();
          setIsDescriptionOpen(!isDescriptionOpen);
        }}
      >
        {isDescriptionOpen ? "Hide" : "Show"} Description
      </a>
      {isDescriptionOpen && (
        <div className="product-description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductData;
