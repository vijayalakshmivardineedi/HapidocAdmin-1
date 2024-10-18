import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Menu,
  IconButton,
  Accordion,
  AccordionDetails,
  Dialog,
  DialogTitle,Breadcrumbs,Link,
  DialogContent,
  Button,
  DialogActions,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PiInfoDuotone } from "react-icons/pi";

function YourComponent() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [editRow, setEditRow] = useState(null);
  const [filterStatus, setFilterStatus] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedType, setEditedType] = useState("");
  const [editedPrice, setEditedPrice] = useState("");
  const [editedStatus, setEditedStatus] = useState("");
  const [editedLocation, setEditedLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      type: "Medicine Delivery",
      price: "100",
      status: "Pending",
      Location: "Chennai",
      Details: [
        {
          medicines: "Acetaminophen",
          orderDate: "2024-03-14",
          medicalStore: "Global Pharmacy",
          price: "$10",
        },
        {
          medicines: "Ibuprofen",
          orderDate: "2024-03-12",
          medicalStore: "Mediworld Medicals",
          price: "$15",
        },
      ],
    },
    {
      id: 2,
      name: "Rahul Kumar",
      type: "Online Consultation",
      price: 1000,
      status: "Completed",
      Location: "Kolkata",
      Details: [
        {
          Hospital: "HealWell Clinic",
          Doctors: "Rahul Kumar",
          Issue: "Diabetes ",
          AppointmentDate: "2024-03-20",
          Price: "$50",
        },
        {
          Hospital: "TeleHealth Clinic",
          Doctors: "Dr. Smith",
          Issue: "Hypertension",
          AppointmentDate: "2024-04-10",
          Price: "$75",
        },
      ],
    },
    {
      id: 3,
      name: "Vivek Reddy",
      type: "Hospital Visits",
      price: 700,
      status: "Pending",
      Location: "Hyderabad",
      Details: [
        {
          Hospital: "Medicover",
          Doctors: "Vivek Reddy",
          Issue: "Diabetes ",
          AppointmentDate: "2024-03-29 ",
          Price: "$50",
        },
        {
          Hospital: "Sunshine Hospital",
          Doctors: "Smith",
          Issue: "Heart Condition",
          AppointmentDate: "2024-04-05",
          Price: "$80",
        },
      ],
    },
    {
      id: 4,
      name: "Garcia",
      type: "Lab Tests",
      price: 800,
      status: "Pending",
      Location: "Pune",
      Details: [
        {
          Labs: "HopeClinic",
          Tests: "Blood tests",
          Date: "2024-03-18",
          Price: "$40",
        },
        {
          Labs: "StarHealth Labs",
          Tests: "Cholesterol Test",
          Date: "2024-04-02",
          Price: "$60",
        },
      ],
    },
  ]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [action, setAction] = useState("");

  const handleMenuClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setEditRow(row);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    sendEmail();
  };

  const sendEmail = () => {
    console.log("Sending email to:", email);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setEditRow(null);
  };

  const handleOpenDialog = (row) => {
    setOpenDialog(true);
    setId(row.id);
    setName(row.name);
    setType(row.type);
    setPrice(row.price);
    setStatus(row.status);
    setLocation(row.location);
    setDetails(row.details);
    setAction(row.action);
  };

  const handleEditClick = (row) => {
    setEditRow(row);
    setEditedName(row.name);
    setEditedType(row.type);
    setEditedPrice(row.price);
    setEditedStatus(row.status);
    setEditedLocation(row.Location);
    setOpenEditDialog(true);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleStatusFilter = (status) => {
    setFilterStatus(status);
  };

  const handleAccordionChange = (rowId) => {
    setExpandedRow(rowId === expandedRow ? null : rowId);
  };

  const handleEditDialogClose = () => {
    setOpenEditDialog(false);
  };

  const handleEditSave = () => {
    const updatedData = data.map((row) => {
      if (row.id === editRow.id) {
        return {
          ...row,
          name: editedName,
          type: editedType,
          price: editedPrice,
          status: editedStatus,
          location: editedLocation,
        };
      }
      return row;
    });

    setData(updatedData);
    setOpenEditDialog(false);
  };
  const handleEdit = (row) => {};

  const handleDelete = (row) => {};

  const handleDownload = (row) => {};

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
       
        <Grid style={{
          backgroundColor: "#ffffff", height: "60px", display: "flex",width:"100%",
          flexDirection: "row", justifyContent: "space-between", alignItems: "center",
        }} >
          <Grid style={{ flexDirection: "column", padding: "0 0 0 15px", }}><Typography variant="h5" style={{
            fontFamily: "sans-serif", fontSize: "18px", fontWeight: 600,
            color: "#05445E"
          }}>Payments</Typography>
            <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "12px", }}>
              <Link underline="hover" color="inherit" href="/dashboard">
                Home
              </Link>
              <Typography color="#189ab4">Payments</Typography>
            </Breadcrumbs>

          </Grid>
          </Grid>
          {/* <Grid item md={2}>
            <Button variant="contained" onClick={handleOpenDialog}>
              Create
            </Button>
          </Grid> */}

          {/* <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="id"
                    label="ID"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="type"
                    label="Type"
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    id="price"
                    label="Price"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    id="status"
                    label="Status"
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="dense"
                    id="location"
                    label="Location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="details"
                    label="Details"
                    type="text"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="action"
                    label="Action"
                    type="text"
                    value={action}
                    onChange={(e) => setAction(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button onClick={handleCloseDialog}>Create</Button>
            </DialogActions>
          </Dialog> */}
      </Box>

      <Grid container spacing={3} sx={{ marginTop: "1px" }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Typography variant="h5">Appointments</Typography>
                  <Typography display="inline">
                    Total Appointments: 12
                  </Typography>
                  <Typography display="inline">Total Price: 500</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Typography variant="h5">Labs</Typography>
                  <Typography display="inline">Total Labs: 20</Typography>
                  <Typography display="inline">Total Price: 1000</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Typography variant="h5">Clinics</Typography>
                  <Typography display="inline">Total Clinics: 5</Typography>
                  <Typography display="inline">Total Price: 1200</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Typography variant="h5">Medicines</Typography>
                  <Typography display="inline">
                    Total Medical Stores: 5
                  </Typography>
                  <Typography display="inline">Total Price: 1300</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          size="small"
          sx={{
            width: "120px",
            marginRight: "5px",
            borderColor: "#05445E",
            borderRadius: "5px",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FormControl sx={{ minWidth: 120, marginRight: "5px" }}>
            <InputLabel id="location-label" sx={{ color: "#05445E" }}>
              Location
            </InputLabel>
            <Select
              labelId="location-label"
              id="location-select"
              value={selectedLocation}
              onChange={handleLocationChange}
              sx={{ marginTop: "5px" }}
              variant="outlined"
              size="small"
              style={{ borderColor: "#05445E" }}
            >
              <MenuItem value="">All Locations</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
              <MenuItem value="Kolkata">Kolkata</MenuItem>
              <MenuItem value="Hyderabad">Hyderabad</MenuItem>
              <MenuItem value="Pune">Pune</MenuItem>
              <MenuItem value="Vizag">Vizag</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="status" sx={{ color: "#05445E" }}>
              Status
            </InputLabel>
            <Select
              labelId="status"
              id="status-select"
              value={filterStatus}
              onChange={(e) => handleStatusFilter(e.target.value)} // Handle status filter change
              sx={{ marginTop: "5px" }}
              variant="outlined"
              size="small"
              style={{ borderColor: "#05445E" }}
            >
              <MenuItem value="">Status</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Details</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.Location}</TableCell>

                    <TableCell
                      onClick={() => handleAccordionChange(row.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="body1" sx={{ marginRight: "5px" }}>
                          Info
                        </Typography>
                        <PiInfoDuotone />
                      </Box>
                    </TableCell>

                    <TableCell>
                      <IconButton onClick={() => handleEditClick(row)}>
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={() => handleEditClick(row)}>
                          Edit
                        </MenuItem>
                        <MenuItem onClick={() => handleDelete(row)}>
                          Delete
                        </MenuItem>
                        <MenuItem onClick={() => handleDownload(row)}>
                          Download
                        </MenuItem>
                      </Menu>

                      {/* Dialog for Editing */}
                      <Dialog
                        open={openEditDialog}
                        onClose={handleEditDialogClose}
                      >
                        <DialogTitle>Edit</DialogTitle>
                        <DialogContent>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <TextField
                                autoFocus
                                margin="dense"
                                id="id"
                                label="ID"
                                type="text"
                                value={editRow ? editRow.id : ""}
                                disabled
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                margin="dense"
                                id="name"
                                label="Name"
                                type="text"
                                value={editedName}
                                onChange={(e) => setEditedName(e.target.value)}
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                margin="dense"
                                id="type"
                                label="Type"
                                type="text"
                                value={editedType}
                                onChange={(e) => setEditedType(e.target.value)}
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                margin="dense"
                                id="price"
                                label="Price"
                                type="text"
                                value={editedPrice}
                                onChange={(e) => setEditedPrice(e.target.value)}
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                margin="dense"
                                id="status"
                                label="Status"
                                type="text"
                                value={editedStatus}
                                onChange={(e) =>
                                  setEditedStatus(e.target.value)
                                }
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField
                                margin="dense"
                                id="location"
                                label="Location"
                                type="text"
                                value={editedLocation}
                                onChange={(e) =>
                                  setEditedLocation(e.target.value)
                                }
                                fullWidth
                              />
                            </Grid>
                          </Grid>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleEditDialogClose}>
                            Cancel
                          </Button>
                          <Button onClick={() => handleEditSave()}>Edit</Button>
                        </DialogActions>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                  {expandedRow === row.id && (
                    <TableRow >
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0, paddingLeft: 0, paddingRight:0}}
                        colSpan={8}
                      >
                        <Accordion
                          sx={{
                            width: "100%",
                            boxShadow: "none",
                            backgroundColor: "#f9f9f9",
                          }}
                          expanded={Boolean(editRow && editRow.id === row.id)}
                        >
                          <AccordionDetails>
                            {row.type === "Medicine Delivery" && (
                              <Table size="large">
                                <TableHead sx={{backgroundColor: "#e0e0e0"}}>
                                  <TableRow>
                                    <TableCell>Medicines</TableCell>
                                    <TableCell>Order Date</TableCell>
                                    <TableCell>Medical Stores</TableCell>
                                    <TableCell>Price</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {row.Details.map((detail, index) => (
                                    <TableRow key={index}>
                                      <TableCell>{detail.medicines}</TableCell>
                                      <TableCell>{detail.orderDate}</TableCell>
                                      <TableCell>
                                        {detail.medicalStore}
                                      </TableCell>
                                      <TableCell>{detail.price}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            )}
                            {row.type === "Online Consultation" && (
                              <Table size="large">
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Hospital</TableCell>
                                    <TableCell>Doctors</TableCell>
                                    <TableCell>Issue</TableCell>
                                    <TableCell>Appointment Date</TableCell>
                                    <TableCell>Price</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {row.Details.map((detail, index) => (
                                    <TableRow key={index}>
                                      <TableCell>{detail.Hospital}</TableCell>
                                      <TableCell>{detail.Doctors}</TableCell>
                                      <TableCell>{detail.Issue}</TableCell>
                                      <TableCell>
                                        {detail.AppointmentDate}
                                      </TableCell>
                                      <TableCell>{detail.Price}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            )}
                            {row.type === "Hospital Visits" && (
                              <Table size="large">
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Hospital</TableCell>
                                    <TableCell>Doctors</TableCell>
                                    <TableCell>Issue</TableCell>
                                    <TableCell>Appointment Date</TableCell>
                                    <TableCell>Price</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {row.Details.map((detail, index) => (
                                    <TableRow key={index}>
                                      <TableCell>{detail.Hospital}</TableCell>
                                      <TableCell>{detail.Doctors}</TableCell>
                                      <TableCell>{detail.Issue}</TableCell>
                                      <TableCell>
                                        {detail.AppointmentDate}
                                      </TableCell>
                                      <TableCell>{detail.Price}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            )}

                            {row.type === "Lab Tests" && (
                              <Table size="large">
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Labs</TableCell>
                                    <TableCell>Tests</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Price</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {row.Details.map((detail, index) => (
                                    <TableRow key={index}>
                                      <TableCell>{detail.Labs}</TableCell>
                                      <TableCell>{detail.Tests}</TableCell>
                                      <TableCell>{detail.Date}</TableCell>
                                      <TableCell>{detail.Price}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            )}
                          </AccordionDetails>
                        </Accordion>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
export default YourComponent;