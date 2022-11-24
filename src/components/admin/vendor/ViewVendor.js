import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import DataTable from 'react-data-table-component';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
  
const ViewCategory = () => {

    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);
    const [filterText, setFilterText] = useState('');

    const editEvent = (e) => {
        // e.persist();
        // setCategory({...categoryInput, [e.target.name]: e.target.value });
        alert('Edit');
    }

    const deleteEvent = () => {
        // e.persist();
        // setCategory({...categoryInput, [e.target.name]: e.target.value });
        alert('delete');
    }

    const dataArray = [
        {
            "id": 1,
            "name":"Mafiz",
            "mobile":"01923405632",
            "phone":"01923405632",
            "email":"mafiz@gmail.com",
            "address":"Dhaka"
        },
        {
            "id": 2,
            "name":"Morshed",
            "mobile":"01923405632",
            "phone":"01923405632",
            "email":"morshed@gmail.com",
            "address":"Cumilla"
        },
        {
            "id": 3,
            "name":"Juel",
            "mobile":"01923405632",
            "phone":"01923405632",
            "email":"juel@gmail.com",
            "address":"Rajshahi"
        }
    ];
    
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            sortField: 'name'
        },
        {
            name: 'Mobile',
            selector: row => row.mobile,
            sortable: true,
            sortField: 'mobile'
        },
        {
            name: 'Phone',
            selector: row => row.phone,
            sortable: true,
            sortField: 'phone'
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
            sortField: 'email'
        },
        {
            name: 'Address',
            selector: row => row.address,
            sortable: true,
            sortField: 'address'
        },
        {
            name: 'Actios',
            cell: (row) => 
                <>
                    <button 
                        id={row.id} 
                        className="btn btn-success mr-2" 
                        onClick={(e) => editEvent(row.id)}>
                        <FaEdit/>
                    </button>
                    <button 
                        id={row.id} 
                        className="btn btn-danger" 
                        onClick={deleteEvent}>
                        <FaTrashAlt/>
                    </button>
                </>
        }
    ];

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const filteredItems = dataArray.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(filteredItems);
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [filterText]);    

    return (

        <div className='container my-5'>
            
            <div className='row mx-5'>
                <div className='col-md-12 col-lg-12 col-sm-12 px-2 py-2'>
                    <div className="card p-2 text-center">
                        <h4 className='card-title pt-2'>Vendor List</h4>
                        {/* <img Name="card-img-top" src="img_avatar1.png" alt="Card image" style={{width:100+'%'}}/> */}
                        <div className="card-body">
                            <div className='col-md-12'>
                                    <DataTable
                                        columns={columns}
                                        data={filteredItems}
                                        pagination
                                        // paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                                        subHeader
                                        subHeaderComponent={
                                            <input 
                                                className='form-control w-25'
                                                type="text"
                                                placeholder='Search Here'
                                                value={filterText}
                                                onChange={(e) => setFilterText(e.target.value)}
                                            />
                                        }
                                        subHeaderAlign="right"
                                        persistTableHead
                                        responsive
                                        paginationComponentOptions
                                        progressPending={pending}
                                        highlightOnHover
                                        actions
                                    />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default ViewCategory;