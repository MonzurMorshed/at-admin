import React, {useState} from 'react';

import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

function Login() {

    const history = useHistory();
    
    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value });
    }

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
                    
                
                    // const cookies = new Cookies();
                    
                    //const token = auth.jwt;
                    console.log(auth);
                    swal("Success",'',"success");
                    // cookies.set('jwt', auth.jwt, { path: '/admin' });
                
                    // swal("Success",res.data.message,"success");
                    
                    // if(res.data.role === 'admin')
                    // {
                    //     history.push('http://192.168.88.107:3001/admin/dashboard');
                    // }
                    // else
                    // {
                    //     history.push('/admin');
                    // }
                    history.push('/admin');
                }
                // else if(res.data.status === 401)
                // {
                //     // swal("Warning",res.data.message,"warning");
                //     swal("Warning",'',"warning");
                // }
                else
                {
                    //setLogin({...loginInput, error_list: res.data.validation_errors });
                    // setLogin({...loginInput, error_list: 'Something went wrong' });
                    swal("Warning",'', ...loginInput);
                }
        });
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Login</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={loginSubmit}>
                                    <div className="form-group mb-3">
                                        <label>Email ID</label>
                                        <input type="email" name="email" onChange={handleInput} value={loginInput.email} className="form-control" />
                                        <span>{loginInput.error_list}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" onChange={handleInput} value={loginInput.password} className="form-control" />
                                        <span>{loginInput.error_list}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
