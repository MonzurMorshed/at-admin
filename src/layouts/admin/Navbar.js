import React from 'react';
import {Link} from 'react-router-dom';
import TitleImage from '../../assets/admin/assets/images/front/amharctech-logo.png';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

const Navbar = () => {

    const history = useHistory();

    const logoutSubmit = (e) => {
        e.preventDefault();
        let auth = JSON.parse(localStorage.getItem('auth'));
        const headers = {
            'Content-Type': 'application/json',
            "Cookie" : {
                "jwt": `${auth.jwt}`
            },
        }
        const data = '';
        axios.post('logout',data, {
            headers: headers,
        }).then(res =>{
                // if(auth.statusCode === 200)
                // {
                    
                    // swal("Success",res.data.message,"success");
                    swal("Success",'',"success");
                    localStorage.removeItem('auth');
                    // if(res.data.role === 'admin')
                    // {
                    //     history.push('http://192.168.88.107:3001/admin/dashboard');
                    // }
                    // else
                    // {
                    //     history.push('/admin');
                    // }
                    history.push('/home');
                // }
        });
    }

    return (
        <nav className="sb-topnav navbar navbar-expand">
            <Link className="navbar-brand ps-3" to="/admin">
                <img alt="AhmarcTech" src={TitleImage} className="m-0 m-auto px-4 py-5" style={{width: 100 + '%'}} />
            </Link>

            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>

            <Link className="nav-link" to="/admin/dashboard">My Apps</Link>

            <Link className="nav-link" to="/admin/add-category">Projects</Link>

            <Link className="nav-link" to="/admin/add-category">Resources</Link>

            <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown1"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
            </Link>
            
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown1">
                <li><Link className="dropdown-item" to="#!">Settings</Link></li>
                <li><Link className="dropdown-item" to="#!">Activity Log</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#!">Logout</Link></li>
            </ul>


            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                </div>
            </form>

            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-user fa-fw"></i>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/admin/user/user">Profile</Link></li>
                        <li><Link className="dropdown-item" to="/admin/user/user-edit">Settings</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" onClick={logoutSubmit} >Logout</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );

}

export default Navbar;
