import React, { useState } from "react";
import ProductData from "../ProductCard/ProductCard";
import TextField from "@mui/material/TextField";
const ProductForm = (props) => {
  const productData = props.productData;
  const [productState, setProductState] = useState({
    price: productData?.price,
    name: productData?.name,
    stock: productData?.stock,
    description: productData?.description,
    image_url: productData?.image_url,
    id: productData?.id,
  });

  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    setProductState((currentValue) => {
      return { ...currentValue, [key]: value };
    });
  };

  const handleImage = (event) => {
    setProductState((currentValue) => {
      return {
        ...currentValue,
        image_url: URL.createObjectURL(event.target.files[0]),
      };
    });
  };
  return (
    <>
      <div>
        <ProductData
          id={productState.id}
          price={productState.price}
          name={productState.name}
          stock={productState.stock}
          description={productState.description}
          image_url={productState.image_url}
        ></ProductData>
      </div>
      <form>
        <TextField
          type="text"
          fullWidth
          margin="dense"
          label="Name"
          variant="standard"
          id="name"
          onChange={handleChange}
          value={productState.name}
        ></TextField>
        <TextField
          type="number"
          fullWidth
          margin="dense"
          label="Price"
          variant="standard"
          id="price"
          value={productState.price}
          onChange={handleChange}
        ></TextField>
        <TextField
          type="number"
          fullWidth
          margin="dense"
          label="Stock"
          variant="standard"
          id="stock"
          value={productState.stock}
          onChange={handleChange}
        ></TextField>
        <TextField
          type="text"
          fullWidth
          margin="dense"
          label="Description"
          variant="standard"
          id="description"
          value={productState.description}
          onChange={handleChange}
        ></TextField>
        <div className="input-file-container">
          <input
            type="file"
            name=""
            id="image-input"
            accept="image/png, image/jpeg"
            onChange={handleImage}
          />
          <label htmlFor="image-input">Input Image</label>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
