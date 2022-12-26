import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link, useHistory, Redirect } from 'react-router-dom';
import logo from '../../assets/admin/assets/images/front/amharctech-logo.png';
import GoogleIcon  from '../../assets/admin/assets/images/social_icon/google.png';
import MicrosoftIcon  from '../../assets/admin/assets/images/social_icon/microsoft.png';
import AppleIcon  from '../../assets/admin/assets/images/social_icon/apple.png';
import LogoInImage from '../../assets/admin/assets/images/front/illus-1.png';
import Cookies from 'universal-cookie';

function Home() {

    let history = useHistory();
    
    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value });
    }

    const cookies = new Cookies();

    const loginSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.post('http://165.232.40.251/api/admin/login', data).then(res => {

            res = JSON.stringify(res.data.resp);
            localStorage.setItem('auth', res);
            
            let auth = JSON.parse(localStorage.getItem('auth'));
                
            if(auth.statusCode === 200)
            {
                swal("Success",'Sign In to dashboard',"success");
                // if(res.data.role === 'admin')
                // {
                //     history.push('http://192.168.88.107:3001/admin/dashboard');
                // }
                // else
                // {
                //     history.push('/admin');
                // }
                alert('Going to dashboard');
                history.push('/admin/dashboard');
                return <Redirect to='/admin/dashboard' />
                
            }
            // else if(res.data.status === 401)
            // {
            //     // swal("Warning",res.data.message,"warning");
            //     swal("Warning",'',"warning");
            // }
            else
            {
                //setLogin({...loginInput, error_list: res.data.validation_errors });
                setLogin({...loginInput, error_list: 'Something went wrong' });
            }
        });

    }

    return  (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-5 col-lg-5 col-sm-12 col-xs-12'>
                    <div className="container pt-3 mt-2">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="card loginCard">
                                    <div className='logoStyle'><img alt="AT AhmarcTech" src={logo} className="py-3"/></div>
                                    <div className="card-body">
                                        <form onSubmit={loginSubmit}>
                                            <p className='text-bold'>Sign in for your account</p>
                                            <div className="form-group mb-3 mt-2">
                                                <input type="email" name="email" placeholder="Enter Email Address" onChange={handleInput} value={loginInput.email} className="form-control form-control-sm" />
                                                <span>{loginInput.error_list}</span>
                                            </div>
                                            <div className="form-group mb-3">
                                                <input type="password" name="password" placeholder="Enter Password" onChange={handleInput} value={loginInput.password} className="form-control form-control-sm" />
                                                <span>{loginInput.error_list}</span>
                                            </div>

                                            <div class="row mb-4">
                                                <div class="col-md-6 d-flex justify-content-center">
                                                    <div class="form-check mb-3 mb-md-0">
                                                        <input class="form-check-input" type="checkbox" value="" id="loginCheck" defaultChecked />
                                                        <label class="form-check-label" for="loginCheck"> Remember me </label>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 d-flex justify-content-center">

                                                <Link to="#!">Forgot password?</Link>
                                                </div>
                                            </div>

                                            <div className="form-group mb-3">
                                                <button type="submit" className="col-md-12 btn btn-sm btn-primary d-table m-0 m-auto">Sign in</button>
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
                                                <p>Not Account Yet ? <Link to="/register">Create An Account</Link></p>
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
                        <img alt="AhmarcTech" src={LogoInImage} className="m-0 m-auto mt-5 px-4 py-2 d-table" />
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
    )
}

export default Home;
