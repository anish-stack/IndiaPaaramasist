
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'
import {useParams} from 'react-router-dom'
const UpdateProducts = () => {
const {id,name} = useParams()
  const [formData, setFormData] = useState({
    productName: '',
    Sizes: '',
    price: '',
    DiscountPrice: '',
    discountPercentage: '',
    Tag: '',
    Description: '',
    Categorey: '',
    Keyword: '',
    image: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
  const handleDiscountChange = (e) => {
    // Calculate discount price when discount percentage changes
    const discountPercentage = parseFloat(e.target.value);
    const price = parseFloat(formData.price);
    if (!isNaN(price) && !isNaN(discountPercentage)) {
      const discountPrice = (price - (price * discountPercentage / 100)).toFixed(2);
      setFormData({ ...formData, discountPercentage: e.target.value, DiscountPrice: discountPrice });
    } else {
      setFormData({ ...formData, discountPercentage: e.target.value, DiscountPrice: '' });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        `https://toysbackend.onrender.com/api/v1/Update-Product/${id}`,
        formData,
       
      );

      console.log(response.data);
      toast.success('Product updated successfully');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to update product');
    }
  };

  const handleFetch = async () => {
    try {
      const response = await axios.get(
        `https://toysbackend.onrender.com/api/v1/single-product/${name}`
      );
 
      const productData = response.data.data;
      console.log(productData)
      setFormData({
        productName: productData.productName || "",
        Description: productData.Description || "",
        DiscountPrice: productData.DiscountPrice || "", // New field for discount percentage
        price: productData.price || "",
        Tag: productData.Tag || "",
        productImg: productData.productImg || "",
        // inStock: productData.inStock || "",
        Categorey: productData.Categorey || "",
        keyword: productData.Keyword || "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, [id]);
  return (
    <form className='container mt-5' onSubmit={handleSubmit}>
    <div className="mb-3 row gx-1">
      <div className='col-md-6'>
        <label htmlFor="category" className="form-label">Category</label>
        <select name="Category" value={formData.Category} onChange={handleChange} className="form-select" id="category">
          <option value="">Select a category</option>
          <optgroup label="Sex Toys for Men">
            <option value="FM Masturbator">FM Masturbator</option>
            <option value="Male Masturbation Toys">Male Masturbation Toys</option>
            <option value="Big Artificial Vagina">Big Artificial Vagina</option>
            <option value="Inflatable Love Doll">Inflatable Love Doll</option>
            <option value="Silicone Love Doll">Silicone Love Doll</option>
            <option value="Sex Real Doll">Sex Real Doll</option>
            <option value="Super Girl">Super Girl</option>
            <option value="Toy Cleaner">Toy Cleaner</option>
          </optgroup>
          <optgroup label="Needs for Men">
            <option value="Penis Enlarger Device">Penis Enlarger Device</option>
            <option value="Cock Ring">Cock Ring</option>
            <option value="Penis Extender Sleeve">Penis Extender Sleeve</option>
            <option value="Penis Enlargement Cream">Penis Enlargement Cream</option>
            <option value="Boys Sex Kit">Boys Sex Kit</option>
            <option value="Strap On">Strap On</option>
            <option value="Anal Dildo">Anal Dildo</option>
            <option value="Toy Cleaner">Toy Cleaner</option>
          </optgroup>
          <optgroup label="Sex Toys for Women">
            <option value="Accessories For Women">Accessories For Women</option>
            <option value="Needs For Women">Needs For Women</option>
          </optgroup>
          <optgroup label="Kinky Pleasure">
            <option value="Fun Stuff">Fun Stuff</option>
            <option value="Bondage Sex">Bondage Sex</option>
          </optgroup>
        </select>
      </div>
  
      <div className="col-md-6">
        <label htmlFor="productName" className="form-label">Product Name</label>
        <input type="text" name="productName" value={formData.productName} onChange={handleChange} className="form-control" id="productName" placeholder="Product Name" />
      </div>
    </div>
  
    <div className="mb-3 row gx-1">
      <div className="col-md-4">
        <label htmlFor="price" className="form-label">Price</label>
        <input type="text" name="price" value={formData.price} onChange={handleChange} className="form-control" id="price" placeholder="Price" />
      </div>
      <div className="col-md-4">
        <label htmlFor="discountPrice" className="form-label">Discount Price</label>
        <input type="text" name="DiscountPrice" value={formData.DiscountPrice} onChange={handleChange} className="form-control" id="discountPrice" placeholder="Discount Price" />
      </div>
      <div className="col-md-4">
        <label htmlFor="percentage" className="form-label">% </label>
        <input type="text" name="discountPercentage" value={formData.discountPercentage} onChange={handleDiscountChange} className="form-control" id="discountPercentage" placeholder="Discount Percentage" />
      </div>
    </div>
  
    <div className='mb-3 row gx-1'>
      <div className="col-md-6">
        <label htmlFor="tag" className="form-label">Tag</label>
        <input type="text" name="Tag" value={formData.Tag} onChange={handleChange} className="form-control" id="tag" placeholder="Tag" />
      </div>
  
      <div className="col-md-6">
        <label htmlFor="Keyword" className="form-label">Keyword</label>
        <input type="text" name="Keyword" value={formData.Keyword} onChange={handleChange} className="form-control" id="keyword" placeholder="Keyword" />
      </div>
    </div>
    
    <div>
      <img src={formData.productImg} alt=""/>
    </div>
    <div className="mb-3">
      <label htmlFor="image" className="form-label">Image</label>
      <input type="file" name="image" onChange={handleFileChange} className="form-control" id="image" />
    </div>
  
    <div className="mb-3">
      <label htmlFor="Sizes" className="form-label">Sizes</label>
      <input type="text" name="Sizes" value={formData.Sizes} onChange={handleChange} className="form-control" id="sizes" placeholder="Sizes" />
    </div>
  
    <div className="mb-3">
      <label htmlFor="Description" className="form-label">Description</label>
      <textarea name="Description" value={formData.Description} onChange={handleChange} className="form-control" id="description" placeholder="Description" />
    </div>
  
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}

export default UpdateProducts