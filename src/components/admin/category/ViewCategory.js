import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import DataTable from 'react-data-table-component';
import FilterComponent from 'react-data-table-component';
  
const ViewCategory = () => {

    const [pending, setPending] = React.useState(true);
    const [rows, setRows] = React.useState([]);
    const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

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

    const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(filteredItems);
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);    

    return (

        <div className='container my-5'>
            
            <div className='row mx-5'>
                <div className='col-md-12 col-lg-12 col-sm-12 px-2 py-2'>
                    <div className="card p-2 text-center">
                        <div className='card-title'>Category List</div>
                        {/* <img Name="card-img-top" src="img_avatar1.png" alt="Card image" style={{width:100+'%'}}/> */}
                        <div className="card-body">
                            <div className='col-md-12'>
                                    <DataTable
                                        columns={columns}
                                        data={filteredItems}
                                        pagination
                                        // paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                                        subHeader
                                        subHeaderComponent={subHeaderComponentMemo}
                                        persistTableHead
                                        responsive
                                        paginationComponentOptions
                                        progressPending={pending}
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