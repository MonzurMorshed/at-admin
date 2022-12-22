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
      { text: "Model", value: "dataArray.model" },
      { text: "Name", value: "dataArray.name" },
      { text: "Price", value: "dataArray.price" },
      { text: "Status", value: "dataArray.status" },
    ];

    const { resultSet, error, isLoading } = useState(false);

    const dataArray = [
        {
            "id": 1,
            "model":"P001",
            "name":"Nokia 2780 Flip",
            "price":"$89.99",
            "status": "Enable"
        },
        {
            "id": 2,
            "model":"P002",
            "name":"Nokia G50",
            "price":"$149.99",
            "status": "Enable"
        },
        {
            "id": 3,
            "model":"P003",
            "name":"Galaxy S22 Ultra",
            "price":"$160",
            "status": "Enable"
        },
        {
            "id": 4,
            "model":"P004",
            "name":"Galaxy Z Flip4",
            "price":"$399",
            "status": "Enable"
        },
        {
            "id": 5,
            "model":"P005",
            "name":"iPhone 14 Pro",
            "price":"$999",
            "status": "Enable"
        },
        {
            "id": 6,
            "model":"P006",
            "name":"Galaxy Z Flip4",
            "price":"$399",
            "status": "Enable"
        },
        {
            "id": 7,
            "model":"P011",
            "name":"Nokia 2780 Flip",
            "price":"$89.99",
            "status": "Enable"
        },
        {
            "id": 8,
            "model":"P012",
            "name":"Nokia G50",
            "price":"$149.99",
            "status": "Enable"
        },
        {
            "id": 9,
            "model":"P013",
            "name":"Galaxy S22 Ultra",
            "price":"$160",
            "status": "Enable"
        },
        {
            "id": 10,
            "model":"P014",
            "name":"Galaxy Z Flip4",
            "price":"$399",
            "status": "Enable"
        },
        {
            "id": 11,
            "model":"P015",
            "name":"iPhone 14 Pro",
            "price":"$999",
            "status": "Enable"
        },
        {
            "id": 12,
            "model":"P016",
            "name":"Galaxy Z Flip4",
            "price":"$399",
            "status": "Enable"
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
          
          <h4 className='card-title pt-2'>Product List</h4>
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
                                                      {obj.model}
                                                  </TableCell>

                                                  <TableCell>
                                                      {obj.name}
                                                  </TableCell>
                                                  <TableCell>
                                                      {obj.price}
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
  