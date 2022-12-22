import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Category() {

    const [description, seDescriptionVal] = useState('Enter Description');

    const [categoryInput, setCategory] = useState({
        parent_id: '',
        slug: '',
        name: '',
        image: '',
        status: '',
        meta_key: '',
        meta_type: '',
        meta_description: '',
        status: '',
        sort_order: '',
        error_list: [],
    });
    
    const handleInput = (e) => {
        e.persist();
        setCategory({...categoryInput, [e.target.name]: e.target.value });
    }

    const handleDescriptionEditorInput = (e,editor) => {
        const descriptionData = editor.getData();
        seDescriptionVal(descriptionData);
    }

    const submitCategory = (e) => {
        e.preventDefault();

        const data = {
            parent_id:categoryInput.parent_id,
            name:categoryInput.name,
            description: description,
            slug:categoryInput.slug,
            image:categoryInput.image,
            meta_key:categoryInput.meta_key,
            meta_type: categoryInput.meta_type,
            meta_description: categoryInput.meta_description,
            status:categoryInput.status,
            sort_order:categoryInput.sort_order,
        }

        axios.post(`api/store-category`, data).then(res => {
            if(res.data.status === 200)
            {
                e.target.reset();
                swal("Success",res.data.message,"success");
                // document.getElementById('CATEGORY_FORM').reset();
            }
            else if(res.data.status === 400)
            {
                setCategory({...categoryInput, error_list:res.data.errors});
            }
        });

    }

    var display_errors = [];
    if(categoryInput.error_list)
    {
        display_errors = [
            categoryInput.error_list.slug,
            categoryInput.error_list.name,
            categoryInput.error_list.meta_title,
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
                    <h4>Add Category 
                        <Link to="/admin/view-category" className="btn btn-primary btn-sm float-end">View Category</Link>
                    </h4>
                </div>
                <div className="card-body">

                    <form onSubmit={submitCategory} id="CATEGORY_FORM">
                        <div className="card-body col-md-10 m-0 m-auto" id="" aria-labelledby="home-tab">
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group mb-3">
                                        <input type="text" name="name" placeholder="Enter name" onChange={handleInput} value={categoryInput.name} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="text" name="slug" placeholder="Enter slug" onChange={handleInput} value={categoryInput.slug} className="form-control" />
                                        <span>{categoryInput.error_list.slug}</span>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <input type="text" name="meta_title" placeholder="Enter meta title" onChange={handleInput} value={categoryInput.meta_title} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <textarea type="text" name="meta_key" placeholder="Enter meta keyword" onChange={handleInput} value={categoryInput.meta_key} className="form-control"></textarea>
                                    </div>
                                    <div className="form-group mb-3">
                                        <textarea type="text" name="meta_description" placeholder="Enter meta description" onChange={handleInput} value={categoryInput.meta_description} className="form-control"></textarea>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="checkbox" name="status" onChange={handleInput} value={categoryInput.status} /> Status 0=shown/1=hidden
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

export default Category;

