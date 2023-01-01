import "date-fns";
import React,{useState} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import withStyles from "@material-ui/core/styles/withStyles";

const AntTabs = withStyles({
  indicator: {},
})(Tabs);
const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 25,
    fontSize: 12,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: 0,
    opacity: 0.6,
    '&:hover': {
      opacity: 1,
    },
    '&$selected': {
      fontWeight: theme.typography.fontWeightMedium,
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);
const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    marginTop: 15,
  },
  spacer: {
    flexGrow: 1,
  },
  importButton: {
    marginRight: 15,
  },
  exportButton: {
    marginRight: 15,
  },
  searchInput: {
    marginRight: 15,
  },
  formControl: {
    margin: 25,
    fullWidth: true,
    display: "flex",
    wrap: "nowrap",
  },
  date: {
    marginTop: 3,
  },
  range: {
    marginTop: 13,
  },
}));

const Toolbar = props => {

  // const {
  //   startDate,
  //   setStartDate,
  //   finishDate,
  //   setFinishDate,
  //   priceFilter,
  //   setPriceFilter,
  //   className,
  //   statusFilter,
  //   setStatusFilter,
  // } = props;

  const {
    statusFilter
  } = props;

  const [tabValue, setTabValue] = useState(statusFilter);
  // const [rangeValue, rangeSetValue] = useState(priceFilter);

  const tabs = [
    {name: "Pending"},
    {name: "Approve"},
    {name: "Completed"},
  ];

  const vendor = props.vendorData;

  const classes = useStyles();

  const handleChangeTab = (e, value) => {
    setTabValue(value);
    let statusSearch = '';
    if(value === 0) { statusSearch = 'unapprove'; }
    else if(value === 1) { statusSearch = 'approve'; }
    else if(value === 2) { statusSearch = 'completed'; }
    vendor.filter(
        item => item.status && item.status.toLowerCase().includes(statusSearch.toLowerCase()),
    );
  };

  /*const handleDateChange = (date) => {
    setStartDate(date);
  };
  const handleDateChangeFinish = (date) => {
    setFinishDate(date);
  };
  const handleChangeRange = (event, newValue) => {
    rangeSetValue(newValue);
  };
  const setRangeFilter = (event, newValue) => {
    vendor.filter(function(){
      setPriceFilter(newValue);
    });
  };
  */

  return (
    
      <div className="container-fluid">
        <div className="row">  
            <div vendor className="col-md-3" >
                <div className={classes}>
                    <AntTabs value={tabValue} onChange={(e, value) => {
                    handleChangeTab(e, value)
                    }} aria-label="ant example">
                    {tabs.map((item) => (<AntTab key={item.name} label={item.name} />))}
                    </AntTabs>
                    <Typography className={classes.padding} />
                </div>
            </div>
            {/* Date & Renge search 
            <div className={'col-md-3 ' + classes.date} vendor>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div justify="space-around">
                        <KeyboardDatePicker
                            id="date-picker-dialog"
                            label={<span style={{ opacity: 0.6 }}>Start Date</span>}
                            format="MM/dd/yyyy"
                            value={startDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                            "aria-label": "change date",
                            }}
                        />
                    </div>
                </MuiPickersUtilsProvider>
            </div>
            <div className={'col-md-3 ' + classes.date} vendor
            >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div justify="space-around">
                <KeyboardDatePicker
                    id="date-picker-dialog-finish"
                    label={<span style={{ opacity: 0.6 }}>Finish Date</span>}
                    format="MM/dd/yyyy"
                    value={finishDate}
                    onChange={handleDateChangeFinish}
                    KeyboardButtonProps={{
                    "aria-label": "change date",
                    }}
                />
                </div>
            </MuiPickersUtilsProvider>
            </div>
            <div className={'col-md-3 ' + classes.range} vendor
            >
            <Typography id="range-slider">
                Range
            </Typography>
            <Slider
                value={rangeValue}
                onChange={handleChangeRange}
                onChangeCommitted={setRangeFilter}
                aria-labelledby="range-slider"
                valueLabelDisplay="auto"
                min={0}
                max={2000}
            />
            </div>
            End  */}
        </div>
      </div>
  
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
};

export default Toolbar;