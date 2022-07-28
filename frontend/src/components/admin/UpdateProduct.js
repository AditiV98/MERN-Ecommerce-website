import React from "react";
import { Link } from "react-router-dom";

const UpdateProduct = () => {
  return (
    <div className="login-page">
      <form>
        <h2>Update Product</h2>
        <input
          type="text"
          name="title"
          required
          placeholder="Title"
          //   value={user.name}
          //   onChange={onChangeInput}
        />

        <input
          type="number"
          name="price"
          required
          placeholder="Price"
          //   value={user.email}
          //   onChange={onChangeInput}
        />

        <input
          type="text"
          name="description"
          required
          autoComplete="on"
          placeholder="Description"
          //   value={user.password}
          //   onChange={onChangeInput}
        />
        <input
          type="text"
          name="category"
          required
          autoComplete="on"
          placeholder="Category"
          //   value={user.password}
          //   onChange={onChangeInput}
        />
        <input
          type="url"
          name="image"
          required
          placeholder="Image"
          //   value={user.password}
          //   onChange={onChangeInput}
        />

        <div className="row">
          <button type="submit">Update</button>
          {/* <Link to="/login">Login</Link> */}
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
