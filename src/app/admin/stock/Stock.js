import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Stock() {

    const [description, seDescriptionVal] = useState('Enter Description');

    const [stockInput, setStock] = useState({
        business_id:"",
        application_id:"",
        quantity:"",
        batch_no:"",
        menufacturar_id:"",
        vendor_id:"",
        expairy_date:"",
        warranty_period:"",
        warranty_date:""
    });
    
    const handleInput = (e) => {
        e.persist();
        setStock({...stockInput, [e.target.name]: e.target.value });
    }

    const handleDescriptionEditorInput = (e,editor) => {
        const descriptionData = editor.getData();
        seDescriptionVal(descriptionData);
    }

    const submitStock = (e) => {
        e.preventDefault();

        const data = {
            business_id: stockInput.business_id,
            application_id: stockInput.application_id,
            quantity: stockInput.quantity,
            batch_no: stockInput.batch_no,
            menufacturar_id: stockInput.menufacturar_id,
            vendor_id: stockInput.vendor_id,
            expairy_date: stockInput.expairy_date,
            warranty_period: stockInput.warranty_period,
            warranty_date: stockInput.warranty_date
        }

        axios.post(`api/store-stock`, data).then(res => {
            if(res.data.status === 200)
            {
                e.target.reset();
                swal("Success",res.data.message,"success");
                // document.getElementById('stock_FORM').reset();
            }
            else if(res.data.status === 400)
            {
                setStock({...stockInput, error_list:res.data.errors});
            }
        });

    }

    var display_errors = [];
    if(stockInput.error_list)
    {
        display_errors = [
            stockInput.error_list.slug,
            stockInput.error_list.name,
            stockInput.error_list.meta_title,
        ];
    }

    return  (
        <div className="container-fluid px-4">

            {
                display_errors.map( (item) => {
                   return( <p className="mb-1" key={item}>{item}</p>)
                })
            }

            <div className="card mt-4">
                <div className="card-header">
                    <h4>Add Stock 
                        <Link to="/admin/view-stock" className="btn btn-primary btn-sm float-end">View stock</Link>
                    </h4>
                </div>
                <div className="card-body">

                    <form onSubmit={submitStock} id="STOCK_FORM">
                        <div className="card-body col-md-10 m-0 m-auto" id="" aria-labelledby="home-tab">
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group mb-3">
                                        <input type="text" name="name" placeholder="Enter name" onChange={handleInput} value={stockInput.name} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="text" name="slug" placeholder="Enter slug" onChange={handleInput} value={stockInput.slug} className="form-control" />
                                        <span>{stockInput.error_list.slug}</span>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <input type="text" name="meta_title" placeholder="Enter meta title" onChange={handleInput} value={stockInput.meta_title} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <textarea type="text" name="meta_key" placeholder="Enter meta keyword" onChange={handleInput} value={stockInput.meta_key} className="form-control"></textarea>
                                    </div>
                                    <div className="form-group mb-3">
                                        <textarea type="text" name="meta_description" placeholder="Enter meta description" onChange={handleInput} value={stockInput.meta_description} className="form-control"></textarea>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="checkbox" name="status" onChange={handleInput} value={stockInput.status} /> Status 0=shown/1=hidden
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-group mb-3">
                                        <CKEditor
                                            editor={ ClassicEditor }
                                            data={description}
                                            onChange={handleDescriptionEditorInput}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary px-4 float-end">Submit</button>
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

export default Stock;

