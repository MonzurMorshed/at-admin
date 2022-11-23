import React from 'react';
import {FcDownload,FcUpload,FcMoneyTransfer} from 'react-icons/fc';
import {BiShoppingBag} from 'react-icons/bi';
import {FaBicycle,FaFileInvoiceDollar} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {TbCalculator} from 'react-icons/tb';
import EnhancedTable from '../../EnhancedTable';

function PosDashboard() {
    
    return  (
        <div className='container my-5'>
            <div className='row pos-row1'>
                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <FcMoneyTransfer/>
                                </div> 
                                <div className="col-md-9">
                                    <h6>$12345</h6>
                                    <span className="sub">Total Purchase Due</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <BiShoppingBag/>
                                </div> 
                                <div className="col-md-9">
                                    <h6>$12345</h6>
                                    <span className="sub">Total Sale Due</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <FcDownload/>
                                </div> 
                                <div className="col-md-9">
                                    <h6>$12345</h6>
                                    <span className="sub">Total Purchase Amount</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <FcUpload/>
                                </div>
                                <div className="col-md-9">
                                    <h6>$12345</h6>
                                    <span className="sub">Total Sales Amount</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row pos-row2 mt-2'>
                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className="col-md-9">
                                    <h6>135</h6>
                                    <span className="sub">Todays Customer</span>
                                </div>
                                <div className='col-md-3'>
                                    <FcMoneyTransfer/>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className="col-md-9">
                                    <h6>253</h6>
                                    <span className="sub">Todays Sales</span>
                                </div>
                                <div className='col-md-3'>
                                    <BiShoppingBag/>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className="col-md-9">
                                    <h6>72</h6>
                                    <span className="sub">Todays Sales</span>
                                </div>
                                <div className='col-md-3'>
                                    <FcDownload/>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className="col-md-9">
                                    <h6>105</h6>
                                    <span className="sub">Purchase Invoice</span>
                                </div>
                                <div className='col-md-3'>
                                    <FcUpload/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row pos-row3 mt-2'>
                <div className='col-md-8'>
                    <div className='card'>
                        <div className='card-body'>
                            <strong>Frequently Used</strong>
                            <strong>Use frequently used features</strong>
                            <div className='row'>
                                <div className='col-md-2'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <AiOutlineShoppingCart/>
                                            POS
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <TbCalculator/>
                                            Calculator
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <FaFileInvoiceDollar/>
                                            Invoice
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <FaBicycle/>
                                            Products
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <strong>Recently Added Products</strong>
                            <div className=''>
                                <EnhancedTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>10</div>
        </div>
    )
}

export default PosDashboard;
