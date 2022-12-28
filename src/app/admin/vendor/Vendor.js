import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';
// import swal from 'sweetalert';
import { AiOutlineUser,AiOutlinePhone,AiOutlineMobile,AiOutlineMail,AiOutlineHome } from 'react-icons/ai';

const iconstyle = {
    background: "#de4930",
    color: "#fff",
    width: "41px",
    justifyContent: 'center',
    alignItems: 'center',
};

const inputField = {
    padding: '0px !important'
};

function Vendor() {

    const [vendorInput, setVendor] = useState({
        name: "",
        mobile: "",
        phone: "",
        email: "",
        address: "",
        error_list: [],
    });
    
    
    const handleInput = (e) => {
        e.persist();
        setVendor({...vendorInput, [e.target.name]: e.target.value })
    }

    
    const submitVendor = (e) => {
        e.preventDefault();

        // const data = {
        //     name:vendorInput.name,
        //     mobile:vendorInput.mobile,
        //     phone:vendorInput.phone,
        //     email:vendorInput.email,
        //     address:vendorInput.address
        // }

        /*
        axios.post(`api/store-vendor`, data).then(res => {
            if(res.data.status === 200)
            {
                e.target.reset();
                swal("Success",res.data.message,"success");
                // document.getElementById('Vendor_FORM').reset();
            }
            else if(res.data.status === 400)
            {
                setVendor({...vendorInput, error_list:res.data.errors});
            }
        });
        */

    }

    var display_errors = [];
    if(vendorInput.error_list)
    {
        display_errors = [
            vendorInput.error_list.name,
            vendorInput.error_list.mobile,
            vendorInput.error_list.email,
        ]
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
                    <h4>Add New Vendor 
                        <Link to="/admin/view-vendor" className="btn btn-primary btn-sm float-end">View Vendor</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <form onSubmit={submitVendor} id="VENDOR_FORM">
                        <div className="card-body col-md-10 m-0 m-auto" id="" aria-labelledby="home-tab">

                            <div className="form-group mb-3">
                                <div className='row'>
                                    <div className='col-md-1' style={iconstyle}><AiOutlineUser/></div>
                                    <div className='col-md-9' style={inputField}><input type="text" name="name" onChange={handleInput} value={vendorInput.name} className="form-control" placeholder="Enter vendor name"/></div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className='row'>
                                    <div className='col-md-1' style={iconstyle}><AiOutlinePhone/></div>
                                    <div className='col-md-9' style={inputField}><input type="phone" name="mobile" onChange={handleInput} value={vendorInput.mobile} className="form-control" placeholder="Enter vendor mobile"/></div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className='row'>
                                    <div className='col-md-1' style={iconstyle}><AiOutlineMobile/></div>
                                    <div className='col-md-9' style={inputField}><input type="phone" name="phone" onChange={handleInput} value={vendorInput.phone} className="form-control" placeholder="Enter vendor phone"/></div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className='row'>
                                    <div className='col-md-1' style={iconstyle}><AiOutlineMail/></div>
                                    <div className='col-md-9' style={inputField}><input type="email" name="email" onChange={handleInput} value={vendorInput.email} className="form-control" placeholder="Enter vendor email"/></div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className='row'>
                                    <div className='col-md-1' style={iconstyle}><AiOutlineHome/></div>
                                    <div className='col-md-9' style={inputField}><textarea name="address" onChange={handleInput} value={vendorInput.address} className="form-control"></textarea></div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary px-4 float-end">Create Vendor</button>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Vendor;

