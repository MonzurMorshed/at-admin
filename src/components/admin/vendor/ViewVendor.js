import React, {useState, useEffect} from 'react';
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
} from "@material-ui/core";

import StatusBullet from "../../StatusBullet";
import Toolbar from '../Toolbar';

const statusColors = {
  completed: "success",
  approve: "info",
  unapprove: "danger",
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
  },
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1050,
  },
  nameContainer: {
    display: "flex",
    alignItems: "baseline",
  },
  status: {
    marginRight: 15,
  },
  actions: {
    justifyContent: "flex-end",
  },
  tableRow: {
    padding: '0 5px',
    cursor: "pointer",
    '.MuiTableRow-root.MuiTableRow-hover&:hover': {},
  },
  hoverable: {
    "&:hover": {
      cursor: `pointer`,
    },
  },
  arrow: {
    fontSize: 10,
    position: "absolute",
  },
}));
  
export default function ViewVendor(props) {

    const { query, cubejsApi, ...rest } = props;

    const classes = useStyles();
  
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
  
    const columns = [
      { text: "Sl", value: "dataArray.id"},
      { text: "Name", value: "dataArray.name" },
      { text: "Mobile", value: "dataArray.mobile" },
      { text: "Phone", value: "dataArray.phone" },
      { text: "Email", value: "dataArray.email" },
      { text: "Address", value: "dataArray.address" },
      { text: "Status", value: "dataArray.status" },
    ];

    const { resultSet, error, isLoading } = useState(false);

    const dataArray = [
        {
            "id": 1,
            "name":"Mafiz",
            "mobile":"0192340563",
            "phone":"01923405632",
            "email":"mafiz@gmail.com",
            "address":"Dhaka",
            "status": "Completed"
        },
        {
            "id": 2,
            "name":"Morshed",
            "mobile":"01923405634",
            "phone":"01923405632",
            "email":"morshed@gmail.com",
            "address":"Cumilla",
            "status": "Approved"
        },
        {
            "id": 3,
            "name":"Juel",
            "mobile":"01923405632",
            "phone":"01923405632",
            "email":"juel@gmail.com",
            "address":"Rajshahi",
            "status": "Unapprove"
        },
        {
          "id": 4,
          "name":"Mafiz",
          "mobile":"01923405635",
          "phone":"01923405632",
          "email":"mafiz@gmail.com",
          "address":"Dhaka",
          "status": "Completed"
      },
      {
          "id": 5,
          "name":"Morshed",
          "mobile":"01923405632",
          "phone":"01923405632",
          "email":"morshed@gmail.com",
          "address":"Cumilla",
          "status": "Approved"
      },
      {
          "id": 6,
          "name":"Juel",
          "mobile":"01923405632",
          "phone":"01923405632",
          "email":"juel@gmail.com",
          "address":"Rajshahi",
          "status": "Unapprove"
      }
    ];

    
    const [sorting, setSorting] = useState([]);
    const [result, setResult] = useState([]);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setResult(dataArray);
      }, 2000);
      return () => clearTimeout(timeout);
    }, []);
      
    if (isLoading) {
      return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress color="secondary" />
      </div>;
    }
    if (error) {
      return <pre>{error.toString()}</pre>;
    }
    // if (dataArray) {
    //   dataArray = dataArray.tablePivot();
  
      const handlePageChange = (event, page) => {
        setPage(page);
      };
      const handleRowsPerPageChange = event => {
        setRowsPerPage(event.target.value);
      };
      const handleSetSorting = str => {
        console.log(str);
        console.log(sorting[1]);
        setSorting([str, sorting[1] === "desc" ? "asc" : "desc"]);
        if(str === 'dataArray.id') {
          console.log(dataArray);
          setResult(
            dataArray.sort((a, b) =>
              a.id > b.id ? -1 : b.id < a.id ? 1 : 0
            )
          );
        }
        if(str === 'dataArray.name') {
          setResult(
            dataArray.sort((a, b) =>
              a.name.toLowerCase() > b.name.toLowerCase() ? -1 : b.name.toLowerCase() < a.name.toLowerCase() ? 1 : 0
            )
          );
        }
        if(str === 'dataArray.status') {
          setResult(
            dataArray.sort((a, b) =>
              a.status.toLowerCase() < b.status.toLowerCase() ? -1 : 1
            )
          );
        }
      };
    // } 

    return (

      <div className='container my-5'>
          
          <h4 className='card-title pt-2'>Vendor List</h4>
          <div className='row mx-5'>
              <div className='col-md-12 col-lg-12 col-sm-12 px-2 py-2'>
                  <div className="card p-2 text-center">
                      {/* <img Name="card-img-top" src="img_avatar1.png" alt="Card image" style={{width:100+'%'}}/> */}
                      <div className="card-body">
                          <CardContent className={classes.content}>
                          <PerfectScrollbar>
                              <div>
                                  <Toolbar vendorData={dataArray}/>
                                  <Table>
                                      <TableHead>
                                          <TableRow>
                                              {columns.map((item) => (
                                              <TableCell key={item.value + Math.random()}
                                                          
                                                          onClick={() => {
                                                          handleSetSorting(`${item.value}`);
                                                          }}
                                              >
                                                  <span>{item.text}
                                                  <Typography className={classes.arrow}>
                                                      {(sorting[0] === item.value) ? (sorting[1] === "desc" ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />) : <KeyboardArrowUpIcon />}
                                                  </Typography>
                                                  </span>
                                              </TableCell>
                                              ))}
                                          </TableRow>
                                          </TableHead>
                                          <TableBody>
                                          {result.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(obj => (
                                              <TableRow
                                              className={classes.tableRow}
                                              hover
                                              key={obj.id}
                                              >
                                                  <TableCell>
                                                      {obj.id}
                                                  </TableCell>
                                                  <TableCell>
                                                      {obj.name}
                                                  </TableCell>
                                                  <TableCell>
                                                      {obj.mobile}
                                                  </TableCell>
                                                  <TableCell>
                                                      {obj.phone}
                                                  </TableCell>
                                                  <TableCell>
                                                      {obj.email}
                                                  </TableCell>
                                                  <TableCell>
                                                      {obj.address}
                                                  </TableCell>
                                                  <TableCell>
                                                    <StatusBullet
                                                      className={classes.status}
                                                      color={statusColors["obj.status"]}
                                                      size="sm"
                                                    />
                                                    {obj.status}
                                                </TableCell>
                                              </TableRow>
                                          ))}
                                          </TableBody>
                                      </Table>
                                      </div>
                                  </PerfectScrollbar>
                                  </CardContent>
                                  <CardActions className={classes.actions}>
                                    <TablePagination
                                        count={dataArray?.length}
                                        onChangePage={handlePageChange}
                                        onChangeRowsPerPage={handleRowsPerPageChange}
                                        page={page}
                                        rowsPerPage={rowsPerPage}
                                        rowsPerPageOptions={[5, 10, 25, 50, 100]}
                                    />
                                  </CardActions>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}
  