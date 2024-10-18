import React, { useState } from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Grid,
  Typography,
  Box,
  TextField,
  Menu,
  IconButton,
  MenuItem,
  Breadcrumbs,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FiInfo } from "react-icons/fi";
const DoctorRequest = () => {

  const [requests, setRequests] = useState([
    { id: 5, name: 'John Wick', Speciality: " Dermatology", status: 'Pending' },
    { id: 6, name: 'John Snow', Speciality: "Urology", status: 'Pending' },
    { id: 1, name: 'Sarah', Speciality: "Gastroenterology", status: 'Pending' },
    { id: 2, name: 'Harshit', Speciality: "Psychiatry", status: 'Accepted' },
    { id: 3, name: 'Angelica', Speciality: "Cardiology", status: 'Rejected' },
  ]);

  const handleApprove = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) => {
        if (request.id === id) {
          return { ...request, status: 'Accepted' };
        }
        return request;
      })
    );
  };

  const handleReject = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) => {
        if (request.id === id) {
          return { ...request, status: 'Rejected' };
        }
        return request;
      })
    );
  };

  const [specificationMenuAnchorEl, setSpecificationMenuAnchorEl] = useState(null);
  const [selectedSpecification, setSelectedSpecification] = useState('All'); // Set default value to 'All'

  const handleSpecificationSelect = (specification) => {
    setSelectedSpecification(specification);
    setSpecificationMenuAnchorEl(null);
  };
  const handleSpecificationMenuClose = () => {
    setSpecificationMenuAnchorEl(null);
  };
  const handleSpecificationMenuClick = (event) => {
    setSpecificationMenuAnchorEl(event.currentTarget);
    setSelectedSpecification('');
  };
  return (
    <Grid >

      <Grid style={{
        backgroundColor: "#fff", height: "60px", display: "flex",
        flexDirection: "row", justifyContent: "space-between", alignItems: "center"
      }} >
        <Grid style={{
          display: "flex", flexDirection: "column", justifyContent: "flex"
        }} >
          <Typography variant="h5" style={{
            fontFamily: "Poppins, sans-serif", fontSize: "25px", fontWeight: 600,
            padding: "0 0 0 10px", color: "#05445E"
          }}>Requests</Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/dashboard" style={{
              fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
              padding: "4px 0 0 10px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
            }}>
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to="/doctors"
              style={{
                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                padding: "4px 0 0 10px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
              }}
            >
              Doctor
            </Link>
            <Typography color="#189ab4" >Requests</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid style={{ marginRight: "25px", display: "flex", flexDirection: "row", justifyContent: "flex-end" }}  >

          <TextField
            label="Filter"
            variant="outlined"
            size="small"
            style={{ width: "60%" }}
            value={selectedSpecification}
            onClick={handleSpecificationMenuClick} // Open specification menu on click
            InputProps={{
              endAdornment: (
                <IconButton size="small" onClick={handleSpecificationMenuClick}>
                  <ArrowDropDownIcon />
                </IconButton>
              ),
            }}
          // Add other props as needed
          />
          <Menu
            anchorEl={specificationMenuAnchorEl}
            open={Boolean(specificationMenuAnchorEl)}
            onClose={handleSpecificationMenuClose}
          >
            <MenuItem onClick={() => handleSpecificationSelect('All')}>All</MenuItem>
            <MenuItem onClick={() => handleSpecificationSelect('Accepted')}>Accepted</MenuItem>
            <MenuItem onClick={() => handleSpecificationSelect('Rejected')}>Rejected</MenuItem>
            {/* Add more menu items as needed */}
          </Menu>

        </Grid>
      </Grid>

      <Grid style={{ marginTop: "30px" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Speciality</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>More</TableCell>
                <TableCell>Actions</TableCell>
                {/* <TableCell>More</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {requests
                .filter(request => selectedSpecification === 'All' || request.status === selectedSpecification)
                .map((request) => (

                  <TableRow key={request.id}>

                    <TableCell>{request.id}</TableCell>
                    <TableCell>{request.name}</TableCell>
                    <TableCell>{request.Speciality}</TableCell>
                    <TableCell>{request.status}</TableCell>
                    <TableCell>
                      <Link to="/doctor-description" style={{ textDecoration: "none" }}>
                        <FiInfo style={{ height: "30px", width: "20px", color: "#05445E" }} />
                      </Link> </TableCell>
                    <TableCell>
                      {request.status === 'Pending' ? (
                        <>
                          <Button
                            variant="contained"
                            color="success"
                            sx={{ marginRight: 1 }}
                            onClick={() => {
                              handleApprove(request.id);
                            }}
                          >
                            Accepted
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => {
                              handleReject(request.id);
                            }}
                          >
                            Rejected
                          </Button>
                        </>
                      ) : (
                        <span style={{ color: request.status === 'Accepted' ? 'green' : 'red' }}>
                          {request.status}
                        </span>
                      )}
                    </TableCell>

                    {/* <TableCell> <MdKeyboardArrowRight style={{height:"30px", width:"20px"}}/></TableCell> */}
                  </TableRow>

                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default DoctorRequest;
