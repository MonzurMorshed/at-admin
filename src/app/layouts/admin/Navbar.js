import React from 'react';
import {Link} from 'react-router-dom';
import TitleImage from '../../../assets/admin/assets/images/front/amharctech-logo.png';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import dummy_user from '../../../assets/admin/images/dummy_user.png';

const Navbar = () => {
    
    let history = useHistory();
    let auth = JSON.parse(localStorage.getItem('auth'));
    let user_details  = JSON.parse(localStorage.getItem('user_details'));
    console.log(user_details);

    const logoutSubmit = (e) => {
        e.preventDefault();
        
        const data = '';
        axios.post('http://165.232.40.251/api/admin/logout',data, {
            headers: {
                Authorization : auth.jwt,
            }
        }).then(res =>{
            if(auth.statusCode === 200){
                swal("Success",'',"success");
                localStorage.removeItem('auth');
                history.push('/');
            }
        });
    }

    return (
        <nav className="sb-topnav navbar navbar-expand">
            <Link className="navbar-brand ps-3" to="/admin">
                <img alt="Ahmarc Tech" src={TitleImage} className="m-0 m-auto px-4 py-5" style={{width: 100 + '%'}} />
            </Link>

            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle"><i className="fas fa-bars"></i></button>

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
                    <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
                </div>
            </form>

            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>John Doe</span>
                        <img alt="User" src={dummy_user} style={{width:30 +"px",height:30 +"px"}} />
                        <i className="fa-fw"></i>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/admin/user/user">Profile</Link></li>
                        <li><Link className="dropdown-item" to="/admin/user/user-edit">Settings</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><span className="dropdown-item" onClick={logoutSubmit} >Logout</span></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );

}

export default Navbar;
