import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';

function AddProduct()
{
    const [categorylist, setCategorylist] = useState([]);
    const [productInput, setProduct] = useState({
        // category_id: '',
        // slug: '',
        // name: '',
        // description: '',

        // meta_title: '',
        // meta_keyword: '',
        // meta_descrip: '',

        // selling_price: '',
        // original_price: '',
        // qty: '',
        // brand: '',
        // featured: '',
        // popular: '',
        // status: '',

        name: '',
        slug: '',
        description: '',
        meta_tag: '',
        meta_description: '',
        meta_tag_keyword: '',
        product_tag: '',
        seo_url: '',
        model: '',
        sku: '',
        image: '',
        price: '',
        max_quantiy: '',
        min_quantiy: '',
        quantity_nofification: '',
        stock_status: '',
        is_shipping: '',
        status: '',
        sort_order: '',
    });
    const [pricture, setPicture] = useState([]);
    const [errorlist, setError] = useState([]);
    
    const handleInput = (e) => {
        e.persist();
        setProduct({...productInput, [e.target.name]:e.target.value });
    }

    const handleImage = (e) => {
        setPicture({ image: e.target.files[0] });
    }

    useEffect( () => {
        let isMounted = true;
        
        axios.get(`/api/all-category`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setCategorylist(res.data.category);
                }
            }
        });

        return () => {
            isMounted = false
        };

    }, []);

    const submitProduct = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('image', pricture.image);
        formData.append('category_id', productInput.category_id);
        formData.append('slug', productInput.slug);
        formData.append('name', productInput.name);
        formData.append('description', productInput.description);

        formData.append('meta_title', productInput.meta_title);
        formData.append('meta_keyword', productInput.meta_keyword);
        formData.append('meta_descrip', productInput.meta_descrip);

        formData.append('selling_price', productInput.selling_price);
        formData.append('original_price', productInput.original_price);
        formData.append('qty', productInput.qty);
        formData.append('brand', productInput.brand);
        formData.append('featured', productInput.featured);
        formData.append('popular', productInput.popular);
        formData.append('status', productInput.status);

        // axios.post(`/api/store-product`, formData).then(res=>{
        //     if(res.data.status === 200)
        //     {
        //         swal("Success",res.data.message,"success");
        //         setProduct({...productInput, 
        //             category_id: '',
        //             slug: '',
        //             name: '',
        //             description: '',
        //             meta_title: '',
        //             meta_keyword: '',
        //             meta_descrip: '',
        //             selling_price: '',
        //             original_price: '',
        //             qty: '',
        //             brand: '',
        //             featured: '',
        //             popular: '',
        //             status: '',
        //         });
        //         setError([]);
        //     }
        //     else if(res.data.status === 422)
        //     {
        //         swal("All Fields are mandetory","","error");
        //         setError(res.data.errors);
        //     }
        // });

    }

    return (
        <div className="container-fluid px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Create a new product
                        {/* <Link to="/admin/view-product" className="btn btn-primary btn-sm float-end">View Product</Link> */}
                    </h4>
                    <ul>
                        <li className="me-4 float-start ">Dashboard</li>
                        <li className="me-4 float-start">E-commerce</li>
                        <li className="me-4 float-start">New product</li>
                    </ul>
                </div>
                <div className="card-body">
                    <form onSubmit={submitProduct} encType="multipart/form-data">
                        <div className='row'>
                            <div className="col-8">
                                <div className="tab-pane card-body border rounded" id="home">
                                    <div className="form-group mb-3">
                                        {/* <label>Slug</label> */}
                                        <input type="text" name="model" onChange={handleInput} value={productInput.model} placeholder="Product Model" className="form-control" />
                                        <small className="text-danger">{errorlist.model}</small>
                                    </div>
                                    <div className="form-group mb-3">
                                        <textarea name='description' className="form-control" rows="17" placeholder="Write Product Description..."></textarea>
                                        <small className="text-danger">{errorlist.slug}</small>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Images</label>
                                        <input type="file" name="image" onChange={handleInput} value={productInput.image} placeholder="Product Code" className="form-control" />
                                        <small className="text-danger">{errorlist.image}</small>
                                    </div>
                                    <div className="form-group mb-3">
                                        {/* <label>Slug</label> */}
                                        <input type="text" name="seo_url" onChange={handleInput} value={productInput.seo_url} placeholder="SEO URL" className="form-control" />
                                        <small className="text-danger">{errorlist.seo_url}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 border rounded">
                                <div className="tab-pane card-body">
                                    {/* <div className="form-group mb-3">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="in_stock" />
                                            <label className="form-check-label" for="in_stock">In Stock</label>
                                        </div>
                                        <small className="text-danger">{errorlist.meta_title}</small>
                                    </div> */}
                                    <div className="form-group mb-3">
                                        <input type="text" name="name" onChange={handleInput} value={productInput.name} placeholder="Product Name" className="form-control" />
                                        <small className="text-danger">{errorlist.name}</small>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="text" name="slug" onChange={handleInput} value={productInput.slug} placeholder="Product Slug" className="form-control" />
                                        <small className="text-danger">{errorlist.slug}</small>
                                    </div>

                                    <div className="form-group mb-3">
                                        <input type="text" name="product_tag" onChange={handleInput} value={productInput.product_tag} placeholder="Product Tag" className="form-control" />
                                        <small className="text-danger">{errorlist.product_tag}</small>
                                    </div>

                                    <div className="form-group mb-3">
                                        <input type="text" name="meta_tag" onChange={handleInput} value={productInput.meta_tag} placeholder="Product meta_tag" className="form-control" />
                                        <small className="text-danger">{errorlist.meta_tag}</small>
                                    </div>

                                    <div className="form-group mb-3">
                                        <input type="text" name="meta_tag_keyword" onChange={handleInput} value={productInput.meta_tag_keyword} placeholder="Product meta_tag_keyword" className="form-control" />
                                        <small className="text-danger">{errorlist.meta_tag_keyword}</small>
                                    </div>

                                    <div className="form-group mb-3">
                                        <input type="text" name="sku" onChange={handleInput} value={productInput.sku} placeholder="Product sku" className="form-control" />
                                        <small className="text-danger">{errorlist.sku}</small>
                                    </div>


                                    <div className="form-group mb-3">
                                        <input type="number" name="min_quantiy" onChange={handleInput} value={productInput.min_quantiy} placeholder="Product min_quantiy" className="form-control" />
                                        <small className="text-danger">{errorlist.min_quantiy}</small>
                                    </div>

                                    <div className="form-group mb-3">
                                        <input type="number" name="max_quantiy" onChange={handleInput} value={productInput.max_quantiy} placeholder="Product max_quantiy" className="form-control" />
                                        <small className="text-danger">{errorlist.max_quantiy}</small>
                                    </div>

                                    <div className="form-group mb-3">
                                        <input type="number" name="quantity_nofification" onChange={handleInput} value={productInput.quantity_nofification} placeholder="Product quantity_nofification" className="form-control" />
                                        <small className="text-danger">{errorlist.quantity_nofification}</small>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="form-check-label">Stock Status</label>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="radio" name="stock_status" id='stock_status_enable' onChange={handleInput} value={productInput.stock_status} placeholder="Product Code" className="form-check-input" />
                                        <label className="form-check-label ms-1 me-4" for="stock_status_enable">Enable</label>
                                        <input type="radio" name="stock_status" id='stock_status_disable' onChange={handleInput} value={productInput.stock_status} placeholder="Product Code" className="form-check-input" />
                                        <label className="form-check-label ms-1 me-4" for="stock_status_disable" >Disable</label>
                                    </div>


                                    <div className="form-group mb-3">
                                        <label className="form-check-label">Status</label>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="radio" name="status" id='status_enable' onChange={handleInput} value={productInput.status} placeholder="Product Code" className="form-check-input" />
                                        <label className="form-check-label ms-1 me-4" for="status_enable">Enable</label>
                                        <input type="radio" name="status" id='status_disable' onChange={handleInput} value={productInput.status} placeholder="Product Code" className="form-check-input" />
                                        <label className="form-check-label ms-1 me-4" for="status_disable" >Disable</label>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="form-check-label">Is Shipping</label>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="radio" name="is_shipping" id='is_shipping_yes' onChange={handleInput} value={productInput.status} placeholder="Product Code" className="form-check-input" />
                                        <label className="form-check-label ms-1 me-4" for="is_shipping_yes">Yes</label>
                                        <input type="radio" name="is_shipping" id='is_shipping_no' onChange={handleInput} value={productInput.status} placeholder="Product Code" className="form-check-input" />
                                        <label className="form-check-label ms-1 me-4" for="is_shipping_no" >No</label>
                                    </div>
                                    {/* <div className="form-group mb-3">
                                        <input type="radio" name="gender" onChange={handleInput} value={productInput.gender} placeholder="Product Code" className="form-check-input" />
                                        <label className="form-check-label ms-1 me-4">Men</label>
                                        <input type="radio" name="gender" onChange={handleInput} value={productInput.gender} placeholder="Product Code" className="form-check-input" />
                                        <label className="form-check-label ms-1 me-4">Women</label>
                                        <input type="radio" name="gender" onChange={handleInput} value={productInput.gender} placeholder="Product Code" className="form-check-input" />
                                        <label className="form-check-label ms-1 me-4">Kids</label>
                                    </div> */}
                                    {/* <div className="form-group mb-3">
                                        <fieldset className="border p-2">
                                            <legend className="w-auto">Category</legend>
                                            <select name="category_id" onChange={handleInput} value={productInput.category_id} className="form-control">
                                                <option>Select Category</option>
                                                {
                                                    categorylist.map( (item) => {
                                                        return (
                                                            <option value={item.id} key={item.id}>{item.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </fieldset>
                                    </div> */}
                                    {/* <div className="form-group mb-3">
                                        <fieldset className="border p-2">
                                            <legend className="w-auto">Tags</legend>
                                            <select name="category_id" multiselect onChange={handleInput} value={productInput.category_id} className="form-control">
                                                <option>Select Category</option>
                                                {
                                                    categorylist.map( (item) => {
                                                        return (
                                                            <option value={item.id} key={item.id}>{item.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </fieldset>
                                    </div> */}
                                </div>
                                <div className="tab-pane card-body">
                                    <div className="form-group mb-3">
                                        <input type="text" name="meta_description" onChange={handleInput} value={productInput.meta_description} placeholder="Product Meta Description" className="form-control" />
                                        <small className="text-danger">{errorlist.meta_description}</small>
                                    </div>
                                    {/* <div className="form-group mb-3">
                                        <input type="text" name="slug" onChange={handleInput} value={productInput.slug} placeholder="Product Code" className="form-control" />
                                        <small className="text-danger">{errorlist.slug}</small>
                                    </div> */}
                                    <div className="form-group mb-3">
                                        <fieldset className="border p-2">
                                            <legend className="w-auto">Price</legend>
                                            <input type="text" name="price" onChange={handleInput} value={productInput.price} placeholder="Product Price" className="form-control" />
                                            <small className="text-danger">{errorlist.price}</small>
                                        </fieldset>
                                    </div>
                                    {/* <div className="form-group mb-3">
                                        <fieldset className="border p-2">
                                            <legend className="w-auto">Sale Price</legend>
                                            <input type="text" name="slug" onChange={handleInput} value={productInput.slug} placeholder="Product Code" className="form-control" />
                                            <small className="text-danger">{errorlist.slug}</small>
                                        </fieldset>
                                    </div> */}
                                    {/* <div className="form-group mb-3">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="in_stock" />
                                            <label className="form-check-label" for="in_stock">Price Includes Taxes</label>
                                        </div>
                                        <small className="text-danger">{errorlist.meta_title}</small>
                                    </div> */}
                                    <div className="form-group mb-3">
                                        <input type="number" name="sort_order" onChange={handleInput} value={productInput.sort_order} placeholder="Product sort_order" className="form-control" />
                                        <small className="text-danger">{errorlist.sort_order}</small>
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary px-4 mt-2 al form-control">Create Product</button>
                                        <small className="text-danger">{errorlist.meta_title}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;
