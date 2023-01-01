import React, {useState, useEffect} from 'react';
import swal from 'sweetalert';
import DataTable from 'react-data-table-component';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import SortIcon from "@mui/icons-material/ArrowDownward";
  
const ViewCategory = () => {

    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);
    const [filterText, setFilterText] = useState('');
    // const [filterParent, setFilterParent] = useState('');

    const editEvent = () => {
        // e.persist();
        // setCategory({...categoryInput, [e.target.name]: e.target.value });
        alert('Edit');
    }

    const deleteEvent = () => {
        // e.persist();
        swal("Are you sure?", {  dangerMode: true,  buttons: true});
        // setCategory({...categoryInput, [e.target.name]: e.target.value });
    }

    const dataArray = [
        {
            "id": 1,
            "parent_id": 0,
            "name": "Electronic-2",
            "meta_key": null,
            "meta_description": null,
            "status": true,
        },
        {
            "id": 2,
            "parent_id": 0,
            "name": "TV",
            "meta_key": null,
            "meta_description": null,
            "status": true,
        },
        {
            "id": 3,
            "parent_id": 0,
            "name": "TV",
            "meta_key": null,
            "meta_description": null,
            "status": true,
        },
        {
            "id": 4,
            "parent_id": 0,
            "name": "TV",
            "meta_key": 'tv',
            "meta_description": null,
            "status": true,
        }
    ];
    
    const columns = [
        {
            name: 'Parent',
            selector: row => row.parent_id,
            sortable: true,
            sortField: 'parent_id'
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            sortField: 'name'
        },
        
        {
            name: 'Meta Key',
            selector: row => row.meta_key,
            sortable: true,
            sortField: 'meta_key'
        },
        {
            name: 'Meta Description',
            selector: row => row.meta_description,
            sortable: true,
            sortField: 'meta_description'
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
            sortField: 'status'
        },
        {
            name: 'Actios',
            cell: (row) => 
                <>
                    <button id={row.ID} className="btn btn-success mr-2" onClick={editEvent}><FaEdit/></button>,
                    <button id={row.ID} className="btn btn-danger" onClick={deleteEvent}><FaTrashAlt/></button>,
                </>
        }
    ];

    // const paginationComponentOptions = {
    //     rowsPerPageText: 'Filas por página',
    //     rangeSeparatorText: 'de',
    //     selectAllRowsItem: true,
    //     selectAllRowsItemText: 'Todos',
    // };

    const filteredItems = dataArray.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	);

    // const filteredItemsByParent = dataArray.filter(
	// 	item => item.name && item.name.toLowerCase().includes(filterParent.toLowerCase()),
	// );

    useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(filteredItems);
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [filteredItems]);
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(filteredItems);
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [filteredItems]);

    return (

        <div className='container my-5'>
            
            <div className='row mx-5'>
                <div className='col-md-12 col-lg-12 col-sm-12 px-2 py-2'>
                    <div className="card p-2 text-center">
                        <h4 className='card-title pt-2'>Category List</h4>
                        {/* <img Name="card-img-top" src="img_avatar1.png" alt="Card image" style={{width:100+'%'}}/> */}
                        <div className="card-body">
                            <div className='col-md-12'>
                                    <DataTable
                                        columns={columns}
                                        data={filteredItems}
                                        pagination
                                        selectableRowsComponent={Checkbox}
                                        // paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                                        subHeader
                                        subHeaderComponent={
                                            <>
                                                <input
                                                    className='form-control w-25'
                                                    type="text"
                                                    placeholder='Search Here'
                                                    value={filterText}
                                                    onChange={(e) => setFilterText(e.target.value)} />
                                                <input
                                                    className='form-control w-25'
                                                    type="text"
                                                    placeholder='Search parent'
                                                    value={filterText}
                                                    onChange={(e) => setFilterText(e.target.value)} />
                                            </>
                                        }
                                        subHeaderAlign="right"
                                        persistTableHead
                                        responsive
                                        paginationComponentOptions
                                        progressPending={pending}
                                        actions
                                    />

                            </div>

                            <Paper>
        <DataTable
          title="Movies"
          columns={columns}
          data={filteredItems}
          defaultSortField="name"
          sortIcon={<SortIcon />}
          pagination
          selectableRows
          selectableRowsComponent={Checkbox}
        />
      </Paper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default ViewCategory;