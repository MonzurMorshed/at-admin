import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';
// import swal from 'sweetalert';
import { AiOutlineUser,AiOutlinePhone,AiOutlineMobile,AiOutlineMail,AiOutlineHome } from 'react-icons/ai';
// import {businessprofile} from '../../../DummyData';

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

function BusinessProfile() {

    const [businessprofileInput, setbusinessprofileInput] = useState({
        name: "",
        mobile: "",
        phone: "",
        email: "",
        address: "",
        error_list: [],
    });
    
    
    const handleInput = (e) => {
        e.persist();
        setbusinessprofileInput({...businessprofileInput, [e.target.name]: e.target.value })
    }

    
    const submitBusinessprofile = (e) => {
        e.preventDefault();

        // const data = {
        //     name:businessprofileInput.name,
        //     mobile:businessprofileInput.mobile,
        //     phone:businessprofileInput.phone,
        //     email:businessprofileInput.email,
        //     address:businessprofileInput.address
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
                setVendor({...businessprofileInput, error_list:res.data.errors});
            }
        });
        */

    }

    var display_errors = [];
    if(businessprofileInput.error_list)
    {
        display_errors = [
            businessprofileInput.error_list.name,
            businessprofileInput.error_list.mobile,
            businessprofileInput.error_list.email,
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
                    <form onSubmit={submitBusinessprofile} id="VENDOR_FORM">
                        <div className="card-body col-md-10 m-0 m-auto" id="" aria-labelledby="home-tab">

                            <div className="form-group mb-3">
                                <div className='row'>
                                    <div className='col-md-1' style={iconstyle}><AiOutlineUser/></div>
                                    <div className='col-md-9' style={inputField}><input type="text" name="name" onChange={handleInput} value={businessprofileInput.name} className="form-control" placeholder="Enter vendor name"/></div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className='row'>
                                    <div className='col-md-1' style={iconstyle}><AiOutlinePhone/></div>
                                    <div className='col-md-9' style={inputField}><input type="phone" name="mobile" onChange={handleInput} value={businessprofileInput.mobile} className="form-control" placeholder="Enter vendor mobile"/></div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className='row'>
                                    <div className='col-md-1' style={iconstyle}><AiOutlineMobile/></div>
                                    <div className='col-md-9' style={inputField}><input type="phone" name="phone" onChange={handleInput} value={businessprofileInput.phone} className="form-control" placeholder="Enter vendor phone"/></div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className='row'>
                                    <div className='col-md-1' style={iconstyle}><AiOutlineMail/></div>
                                    <div className='col-md-9' style={inputField}><input type="email" name="email" onChange={handleInput} value={businessprofileInput.email} className="form-control" placeholder="Enter vendor email"/></div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className='row'>
                                    <div className='col-md-1' style={iconstyle}><AiOutlineHome/></div>
                                    <div className='col-md-9' style={inputField}><textarea name="address" onChange={handleInput} value={businessprofileInput.address} className="form-control"></textarea></div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary px-4 float-end">Submit</button>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default BusinessProfile;

