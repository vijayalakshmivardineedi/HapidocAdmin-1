import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, MenuItem, Menu, IconButton, Breadcrumbs } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const HospitalDetail = ({ onDelete }) => {
  const hospitalsData = [
    { id: 1, name: 'Hospital 1', location: 'Delhi', doctors: 25, address: 'Durganagar, Midhilapuri Vuda Colony, Madhurawada, Visakhapatnam, Andhra Pradesh 530048', rating: 4, imageUrl: 'https://www.apollohospitals.com/bangalore/wp-content/uploads/2021/08/Bannerghatta-Road-Banglore-768x476.jpg' },
    { id: 2, name: 'Hospital 2', location: 'Mumbai', doctors: 30, address: '456 Elm StrDurganagar, Midhilapuri Vuda Colony, Madhurawada, Visakhapatnam, Andhra Pradesh 530048eet', rating: 3, imageUrl: 'https://images.apollo247.in/pd-cms/cms/2022-08/Apollo%20Clinic%20Vizag.jpg?tr=w-250,q-80,f-webp,dpr-2.625,c-at_max' },
    { id: 3, name: 'Hospital 3', location: 'Bangalore', doctors: 20, address: '789 OaDurganagar, Midhilapuri Vuda Colony, Madhurawada, Visakhapatnam, Andhra Pradesh 530048k Street', rating: 5, imageUrl: 'https://images1-fabric.practo.com/dwaraka-medical-centre-visakhapatnam-1466578922-576a37ea3e88f.jpg' },
    { id: 4, name: 'Hospital 4', location: 'Chennai', doctors: 35, address: '101 PineDurganagar, Midhilapuri Vuda Colony, Madhurawada, Visakhapatnam, Andhra Pradesh 530048 Street', rating: 2, imageUrl: 'https://medicarehospitals.info/wp-content/uploads/2023/08/edt-1024x702.jpg' },
  ];
  const patientData = [
    { id: 1, name: 'Alice Smith', gender: 'Female', age: 35, problem: 'Fever', appointmentDate: '2024-03-19' },
    { id: 2, name: 'Bob Johnson', gender: 'Male', age: 45, problem: 'Hypertension', appointmentDate: '2024-03-20' },
    { id: 3, name: 'Charlie Brown', gender: 'Male', age: 25, problem: 'Asthma', appointmentDate: '2024-03-21' },
    { id: 4, name: 'Diana Miller', gender: 'Female', age: 50, problem: 'Hyperlipidemia ', appointmentDate: '2024-03-22' },
  ];
  const [selectedSpecification, setSelectedSpecification] = useState('All');
  const [specificationMenuAnchorEl, setSpecificationMenuAnchorEl] = useState(null);
  const handleSpecificationMenuClick = (event) => {
    setSpecificationMenuAnchorEl(event.currentTarget);
    setSelectedSpecification('');
  };
  const handleSpecificationMenuClose = () => {
    setSpecificationMenuAnchorEl(null);
  };
  const handleSpecificationSelect = (specification) => {
    setSelectedSpecification(specification);
    setSpecificationMenuAnchorEl(null);
  };
  
  const { id } = useParams();
  const [hospital, setHospital] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospitalData = async () => {
      try {
        const filteredHospital = hospitalsData.find(hospital => hospital.id === parseInt(id));
        if (filteredHospital) {
          setHospital(filteredHospital);
        } else {
          throw new Error(`Hospital with ID ${id} not found.`);
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHospitalData();
  }, [id]);

  // Sample data for doctors
  const doctorsData = [
    { name: 'Dr. John Doe', dateOfJoin: '2022-01-01', gender: 'Male', specialty: 'Cardiology', availability: 'Mon-Fri' },
    { name: 'Dr. Jane Smith', dateOfJoin: '2022-02-15', gender: 'Female', specialty: 'Orthopedics', availability: 'Mon-Sat' },
    { name: 'Dr. David Johnson', dateOfJoin: '2022-03-10', gender: 'Male', specialty: 'Neurology', availability: 'Mon-Wed' },
    { name: 'Dr. Emily Brown', dateOfJoin: '2022-04-20', gender: 'Female', specialty: 'Pediatrics', availability: 'Tue-Sun' },
    { name: 'Dr. Michael Wilson', dateOfJoin: '2022-05-05', gender: 'Male', specialty: 'Oncology', availability: 'Wed-Sat' },
    // Add more doctor objects as needed
  ];
  const [Appointments, setAppointments] = useState([
    { id: 5, name: 'John Wick', status: 'Pending', date: "03/12/2022", time: "04:30 PM", problem: "Fever and cough" },
    { id: 6, name: 'John Snow', status: 'Pending', date: "03/12/2022", time: "04:30 PM", problem: "Headache and fatigue" },
    { id: 1, name: 'Sarah', status: 'Pending', date: "03/12/2022", time: "04:30 PM", problem: "Stomach pain and nausea" },
    { id: 2, name: 'Harshit', status: 'Completed', date: "03/12/2022", time: "04:30 PM", problem: "Back pain and muscle ache" },
    { id: 3, name: 'Angelica', status: 'Rejected', date: "03/12/2022", time: "04:30 PM", problem: "Skin rash and itching" },
    { id: 7, name: 'Michael', status: 'Pending', date: "03/12/2022", time: "04:30 PM", problem: "Joint pain and swelling" },
    { id: 8, name: 'Emma', status: 'Completed', date: "03/12/2022", time: "04:30 PM", problem: "Sore throat and fever" },
    { id: 9, name: 'David', status: 'Pending', date: "03/12/2022", time: "04:30 PM", problem: "Chest congestion and cough" },
    { id: 10, name: 'Olivia', status: 'Pending', date: "03/12/2022", time: "04:30 PM", problem: "Fatigue and dizziness" },
]);
  const [showAllAppointments, setShowAllAppointments] = useState(false);
  const filteredAppointments = showAllAppointments ? Appointments : Appointments.slice(0, 3);
  // Sample data for reviews and ratings
  const reviewsData = [
    { id: 1, user: 'User1', comment: 'Great hospital with excellent service.', rating: 5 },
    { id: 2, user: 'User2', comment: 'Very satisfied with the doctors and facilities.', rating: 4 },
    { id: 3, user: 'User3', comment: 'Could improve on waiting times.', rating: 3 },
    // Add more review objects as needed
  ];

  // Calculate average rating
  const averageRating = reviewsData.reduce((total, review) => total + review.rating, 0) / reviewsData.length;

  // Calculate number of ratings for each star
  const starRatings = Array.from({ length: 5 }, (_, index) => {
    const count = reviewsData.filter(review => review.rating === index + 1).length;
    return { stars: index + 1, count };
  });
const navigate=useNavigate()
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */} <Grid style={{
                backgroundColor: "#ffffff", height: "60px", display: "flex", width: "100%",
                flexDirection: "row", justifyContent: "space-between", alignItems: "center",
            }} >
                <Grid style={{
                    display: "flex", flexDirection: "column", justifyContent: "flex"
                }} >
                    <Typography variant="h5" style={{
                        fontFamily: "Poppins, sans-serif", fontSize: "22px", fontWeight: 600,
                        padding: "0 0 0 10px", color: "#05445E"
                    }}>Clinic Profile</Typography>

                    <Breadcrumbs aria-label="breadcrumb">
                    <Link
                            underline="hover" 
                            color="inherit"
                            to="/dashboard"
                            style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                                padding: "4px 0 0 10px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
                            }}>
                            Home
                        </Link>
                        <Link
                            underline="hover" 
                            color="inherit"
                            to="/clinics"
                            style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                                padding: "4px 0 0 10px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
                            }}>
                            Clinics
                        </Link>
                        <Typography color="#189ab4" > Clinic Profile</Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', backgroundColor:"#fff" , marginTop :"20px"}}>
        <Box>
          {/* Add buttons here */}
          <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>EDit</Button>
          <Button variant="contained" color="secondary">Create</Button>
        </Box>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {loading && <Typography>Loading...</Typography>}
        {!loading && hospital ? (
          <Grid container spacing={3}>
            {/* Image Card */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={hospital.imageUrl}
                  alt="Hospital Image"
                />
                <CardContent>
                  <Typography variant="h5" sx={{ marginBottom: 4, textAlign: 'center', marginTop: '35px' }}>About Hospital</Typography>
                  <Divider />
                  <Box sx={{ marginTop: '20px' }}>
                    <Grid container spacing={2}>
                      {/* First row */}
                      <Grid item xs={6}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>Name</Typography>
                        <Typography sx={{ textAlign: 'center' }}>{hospital.name}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>No. of Doctors</Typography>
                        <Typography sx={{ textAlign: 'center' }}>{hospital.doctors}</Typography>
                      </Grid>
                      {/* Second row */}
                      <Grid item xs={6}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>Email</Typography>
                        <Typography sx={{ textAlign: 'center' }}>info@hospitalabc.com</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>Phone Number</Typography>
                        <Typography sx={{ textAlign: 'center' }}>+1234567890</Typography>
                      </Grid>
                      {/* Third row */}
                      <Grid item xs={12}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '29px' }}>Address</Typography>
                        <Typography sx={{ textAlign: 'center' }}>{hospital.address}</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            {/* Description Card */}
            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
                  <Typography variant="h5" sx={{ marginBottom: 2, textAlign: 'center',color:'#fff',background:'#DC7844'}}>Description</Typography>
                  <Typography variant="body1"> Apollo Hospitals,Ramnagar Visakhapatnam, aim to bring health care of International standards within the reach of every individual. True to its mission, the Apollo group has opened the gates of high quality and innovative technology for treating the Cardiac and Renal ailments, in a strategically located city like Visakhapatnam. Apollo Hospitals, Visakhapatnam was inaugurated by Shri. N. Chandrababu Naidu, Honorable Chief Minister of the State of Andhra Pradesh, on 1st May 1999. This 110 bedded specialty hospital is fully equipped with the latest state-of-the-art equipment, well trained and experienced nursing staff for providing excellent care with a human touch. Apollo Hospitals, Visakhapatnam has established itself as a major referral center for critical care and has performed over 17800 Angiograms, thousands of percutaneous transluminal coronary angioplasties(PTCA),hundreds of BMV, a number of Open-heart surgeries for correction of Congenital Heart diseases, Mitral, Aortic valve replacements, Coronary By-pass surgeries and also number of related donor Renal Transplants with high success rate. It has done record number of dialysis round the clock. </Typography>
                  {/* Heading for Doctor List */}
                  <Typography variant="h5" sx={{ marginTop: '25px', marginBottom: '10px', textAlign: 'center' , background:'#DC7844',color:'#fff'}}>Doctors List</Typography>
                  {/* Table Container */}
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" stripedRows>
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 'bold' }}>Doctor Name</TableCell>
                          <TableCell sx={{ fontWeight: 'bold' }}>Date of Join</TableCell>
                          <TableCell sx={{ fontWeight: 'bold' }}>Gender</TableCell>
                          <TableCell sx={{ fontWeight: 'bold' }}>Specialty</TableCell>
                          <TableCell sx={{ fontWeight: 'bold' }}>Availability</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {doctorsData.map((doctor, index) => (
                          <TableRow key={index} sx={index % 2 ? { bgcolor: '#f5f5f5' } : {}}>
                            <TableCell>{doctor.name}</TableCell>
                            <TableCell>{doctor.dateOfJoin}</TableCell>
                            <TableCell>{doctor.gender}</TableCell>
                            <TableCell>{doctor.specialty}</TableCell>
                            <TableCell>{doctor.availability}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  {/* Heading for Reviews and Ratings */}
                  <Typography variant="h5" sx={{ marginTop: '25px', marginBottom: '10px', textAlign: 'center' , background:'#DC7844',color:'#fff'}}>Reviews and Ratings</Typography>
                  {/* Reviews Container */}
                  <Box sx={{ marginTop: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* Average Rating */}
                    <Typography variant="h6" sx={{ marginBottom: '5px' }}>Average Rating: {averageRating.toFixed(1)}</Typography>
                    {/* Star Ratings */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                      {starRatings.map(star => (
                        <Box key={star.stars} sx={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                          <Typography>{star.stars} star</Typography>
                          <Typography>({star.count})</Typography>
                        </Box>
                      ))}
                    </Box>
                    {/* Individual Reviews */}
                    {reviewsData.map(review => (
                      <Box key={review.id} sx={{ width: '100%', maxWidth: '600px', bgcolor: '#fff', padding: '15px', marginBottom: '10px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>{review.user}</Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>{review.comment}</Typography>
                        <Typography variant="body2" sx={{ color: '#666' }}>Rating: {review.rating}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            
            <Grid item sx={12} md={12} justifyContent="flex-end" alignItems="center">
                    <Grid container justifyContent="space-between" alignItems="center" style={{ backgroundColor: "#fff", }}>
                        <Typography variant="h5" gutterBottom style={{ fontFamily: "sans-serif", fontSize: "22px", color: "#04374d", padding: "20px 0 0 20px", fontWeight: "600" }}>Appointments</Typography>
                        <TextField
                            label="Filter"
                            variant="outlined"
                            size="small"
                            style={{ width: "auto", margin: "15px 15px 0 0" }}
                            value={selectedSpecification}
                            onClick={handleSpecificationMenuClick}
                            InputProps={{
                                endAdornment: (
                                    <IconButton size="small" onClick={handleSpecificationMenuClick}>
                                        <ArrowDropDownIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        <Menu
                            anchorEl={specificationMenuAnchorEl}
                            open={Boolean(specificationMenuAnchorEl)}
                            onClose={handleSpecificationMenuClose}
                        >
                            <MenuItem onClick={() => handleSpecificationSelect('All')}>All</MenuItem>
                            <MenuItem onClick={() => handleSpecificationSelect('Completed')}>Completed</MenuItem>
                            <MenuItem onClick={() => handleSpecificationSelect('Rejected')}>Rejected</MenuItem>
                        </Menu>
                    </Grid>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Date-Time</TableCell>
                                    <TableCell>Problem</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredAppointments.map((request) => (
                                    <TableRow key={request.id}>
                                        <TableCell>{request.name}</TableCell>
                                        <TableCell>{request.date} - {request.time}</TableCell>
                                        <TableCell>{request.problem}</TableCell>
                                        <TableCell>{request.status}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        {!showAllAppointments && Appointments.length > 5 && (
                            <Button onClick={() => navigate("/clinic-appointments")} style={{ marginTop: '10px' }}>View More</Button>
                        )}
                    </TableContainer>

                
            </Grid>
            <Grid item sx={12} md={12} justifyContent="flex-end" alignItems="center">
           
                    <Grid container justifyContent="space-between" alignItems="center" style={{ backgroundColor: "#fff", }}>
                        <Typography variant="h5" gutterBottom style={{ fontFamily: "sans-serif", fontSize: "22px", color: "#04374d", padding: "20px 0 0 20px", fontWeight: "600" }}>Patients List</Typography>
                    </Grid>
                    <TableContainer component={Paper} style={{ overflowX: "hidden" }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Gender</TableCell>
                                    <TableCell>Age</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {patientData.map((request) => (
                                    <TableRow key={request.id}>
                                        <TableCell>{request.name}</TableCell>
                                        <TableCell>{request.gender}</TableCell>
                                        <TableCell>{request.age}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
           
         
        ) : (
          <Typography>Hospital not found.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default HospitalDetail;