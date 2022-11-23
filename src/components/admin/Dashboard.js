import React from 'react';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { BsFilePost, BsTools } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { GiDiscGolfBag, GiReceiveMoney } from 'react-icons/gi';
import { GrMoney  } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function Dashboard() {
    
    return  (
        <div className='container my-5'>
            <h3 className='row mx-5'>Applications</h3>
            <div className='row mx-5'>
                <div className='col-md-3 col-lg-3 col-sm-4 px-2 py-2'>
                    <div className="card p-2 text-center">
                        {/* <img Name="card-img-top" src="img_avatar1.png" alt="Card image" style={{width:100+'%'}}/> */}
                        <div className="card-body">
                            <h5 className="card-title">Ecommerce</h5>
                            <span className='dashboard-icon'><FaShoppingCart/></span>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-sm-4 px-2 py-2'>
                    <div className="card p-2 text-center">
                        {/* <img Name="card-img-top" src="img_avatar1.png" alt="Card image" style={{width:100+'%'}}/> */}
                        <div className="card-body">
                            <h5 className="card-title">Tool Tracking</h5>
                            <span className='dashboard-icon'><BsTools/></span>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-sm-4 px-2 py-2'>
                    <div className="card p-2 text-center">
                        {/* <img Name="card-img-top" src="img_avatar1.png" alt="Card image" style={{width:100+'%'}}/> */}
                        <div className="card-body">
                            <h5 className="card-title">Restaurant</h5>
                            <span className='dashboard-icon'><MdOutlineRestaurantMenu/></span>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-sm-4 px-2 py-2'>
                    <div className="card p-2 text-center">
                        {/* <img Name="card-img-top" src="img_avatar1.png" alt="Card image" style={{width:100+'%'}}/> */}
                        <div className="card-body">
                            <h5 className="card-title">POS</h5>
                            <span className='dashboard-icon'><BsFilePost/></span>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className='row mx-5'>Updates</h3>
            <div className='row mx-5'>
                <div className='col-md-3 col-lg-3 col-sm-4  px-2 py-2'>
                    <div className="card p-2 text-center">
                        {/* <img Name="card-img-top" src="img_avatar1.png" alt="Card image" style={{width:100+'%'}}/> */}
                        <div className="card-body">
                        <span className='dashboard-icon'><FiFileText/></span>
                        <p className="card-text">ORDER</p>
                        <Link to="#" className="btn btn-primary">See Profile</Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-sm-4  px-2 py-2'>
                    <div className="card p-2 text-center">
                        {/* <img Name="card-img-top" src="img_avatar1.png" alt="Card image" style={{width:100+'%'}}/> */}
                        <div className="card-body">
                        <span className='dashboard-icon'><GrMoney/></span>
                        <p className="card-text">REVENUE</p>
                        <Link to="#" className="btn btn-primary">See Profile</Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-sm-4  px-2 py-2'>
                    <div className="card p-2 text-center">
                        {/* <img Name="card-img-top" src="img_avatar1.png" alt="Card image" style={{width:100+'%'}}/> */}
                        <div className="card-body">
                        <span className='dashboard-icon'><GiDiscGolfBag/></span>
                        <p className="card-text">PURCHASE</p>
                        <Link to="#" className="btn btn-primary">See Profile</Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3 col-sm-4  px-2 py-2'>
                    <div className="card p-2 text-center">
                        {/* <img Name="card-img-top" src="img_avatar1.png" alt="Card image" style={{width:100+'%'}}/> */}
                        <div className="card-body">
                        <span className='dashboard-icon'><GiReceiveMoney/></span>
                        <p className="card-text">PROFIT</p>
                        <Link to="#" className="btn btn-primary">See Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
