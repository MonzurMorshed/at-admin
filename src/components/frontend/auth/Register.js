import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../assets/admin/assets/images/front/amharctech-logo.png';
import GoogleIcon  from '../../../assets/admin/assets/images/social_icon/google.png';
import MicrosoftIcon  from '../../../assets/admin/assets/images/social_icon/microsoft.png';
import AppleIcon  from '../../../assets/admin/assets/images/social_icon/apple.png';
import LogoInImage from '../../../assets/admin/assets/images/front/illus-1.png';

function Register() {

    const history = useHistory();
    const [registerInput, setRegister] = useState({
        email: '',
        password: '',
        confirm_password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value });
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            email: registerInput.email,
            password: registerInput.password,
            password_confirm: registerInput.confirm_password,
        }

        console.log(data);

        axios.post('http://165.232.40.251/api/admin/register', data).then(res => {
                res = res.data.resp;
                if(res.statusCode === 200){
                    swal("Success",'Signup success. Please signin.',"success");
                    history.push('/admin');
                }else{
                    swal("Warning",res.message,"warning");
                    history.push('/signup');
                }
        });
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-5 col-lg-5 col-sm-12 col-xs-12'>
                    <div className="container pt-3 mt-2">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card registerCard">
                                    <div className='logoStyle'><img alt="logo" src={logo} className="py-3"/></div>
                                    <div className="card-body">
                                        <form onSubmit={registerSubmit}>
                                            <p className='text-bold'>Sign up for your account</p>
                                            <div className="form-group mb-3 mt-2">
                                                <input type="email" name="email" placeholder="Enter Email Address" onChange={handleInput} value={registerInput.email} className="form-control form-control-sm" />
                                                <span>{registerInput.error_list}</span>
                                            </div>
                                            <div className="form-group mb-3">
                                                <input type="password" name="password" placeholder="Enter Password" onChange={handleInput} value={registerInput.password} className="form-control form-control-sm" />
                                                <span>{registerInput.error_list}</span>
                                            </div>
                                            <div className="form-group mb-3">
                                                <input type="password" name="confirm_password" placeholder="Enter Confirm Password" onChange={handleInput} value={registerInput.confirm_password} className="form-control form-control-sm" />
                                                <span>{registerInput.error_list}</span>
                                            </div>

                                            <div class="row mb-4">
                                                <div class="col-md-6 d-flex justify-content-center">
                                                    <div class="form-check mb-3 mb-md-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="registerCheck" checked />
                                                        <label class="form-check-label" for="registerCheck"> Remember me </label>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 d-flex justify-content-center">

                                                <Link to="#!">Forgot password?</Link>
                                                </div>
                                            </div>

                                            <div className="form-group mb-3">
                                                <button type="submit" className="col-md-12 btn btn-sm btn-primary d-table m-0 m-auto">Sign up</button>
                                            </div>

                                            <p className='m-0 m-auto d-table mb-2'>OR</p>

                                            <div className="form-group mb-3">
                                                <button type="button" className="socialBtn col-md-12 btn btn-sm btn-default d-table m-0 m-auto justify-content-between">
                                                    Continue with Google
                                                    <img className="logoSocialIocn" src={GoogleIcon}/>
                                                </button>
                                            </div>
                                            <div className="form-group mb-3">
                                                <button type="button" className="socialBtn col-md-12 btn btn-sm btn-default d-table m-0 m-auto justify-content-between">
                                                    Continue with Microsoft
                                                    <img className="logoSocialIocn" src={MicrosoftIcon}/>
                                                </button>
                                            </div>
                                            <div className="form-group mb-3">
                                                <button type="button" className="socialBtn col-md-12 btn btn-sm btn-default d-table m-0 m-auto justify-content-between">
                                                    Continue with Apple
                                                    <img className="logoSocialIocn" src={AppleIcon}/>
                                                </button>
                                            </div>
                                            <div class="text-center">
                                                <p>Already have account ? <Link to="/home">Sigin up to your account</Link></p>
                                            </div>
                                        </form>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-7 col-lg-7 col-sm-12 col-xs-12 rightSection'>
                    <div className="m-0 m-auto mt-2">
                        <img alt=" " src={LogoInImage} className="m-0 m-auto mt-5 px-4 py-2 d-table" />
                        <div className="m-0 m-auto w-4/6 pt-3">
                            <p className="text-center text-bold text-white text-2xl"><strong>Turn your ideas to reality</strong></p>
                            <p className="text-center text-white text-sm pb-1">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                        <div className="px-2 py-4 m-0 m-auto ">
                            <button type="button" className="socialBtn col-md-4 btn-sm btn btn-primary d-table m-0 m-auto justify-content-between">
                                Learn How
                            </button>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Register;
