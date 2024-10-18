import React, { useState } from 'react';
import { Grid, Typography, Button, IconButton, Menu, MenuItem, Box, Card, CardContent, CardActionArea, CardMedia, Divider } from '@mui/material'; // Import missing components
import { Link, useNavigate } from 'react-router-dom';
import { BsChatTextFill } from "react-icons/bs";

import stamp from '../../assets/icons/approved.png'

import MoreVertIcon from '@mui/icons-material/MoreVert';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FaceIcon from '@mui/icons-material/Face';
import { InputAdornment, Breadcrumbs, Badge } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import PasswordIcon from '@mui/icons-material/Password';

const cardData = [
    {
        id: 1,
        name: 'Dr. Nisha Sharma',
        specialization: 'Obstetrics and Gynecology',
        address: '123, Sunshine Avenue, Mumbai, India',
        phoneNumber: '+91 9876543210',
        type: 'verify',
        email: 'dr.nisha@gmail.com',
        imageUrl: 'https://th.bing.com/th/id/OIP.WPYPa4GubQVLa0kQqXcfvwHaHa?rs=1&pid=ImgDetMain'
    },
    {
        id: 2,
        name: 'Dr. Meera Joshi',
        specialization: 'Ophthalmology',
        address: '789, Urgent Care Lane, Chandigarh, India',
        phoneNumber: '+91 9876543218',
        type: 'verify',
        email: 'dr.meera.joshi@gmail.com',
        imageUrl: 'https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg?w=1060'
    },
    {
        id: 3,
        name: 'Dr. Sanjay Kumar',
        specialization: 'Neurology',
        address: '123, Visionary Avenue, Ahmedabad, India',
        phoneNumber: '+91 9876543217',
        type: 'not verify',
        email: 'dr.rohan.shah@gmail.com',
        imageUrl: 'https://thumbs.dreamstime.com/b/indian-doctor-mature-male-medical-standing-isolated-white-background-handsome-model-portrait-31871541.jpg'
    },
    {
        id: 4,
        name: 'Dr. Priya Singh',
        specialization: 'Dermatology',
        address: '101, Radiance Road, Chennai, India',
        phoneNumber: '+91 9876543213',
        type: 'not verify',
        email: 'dr.priya.singh@gmail.com',
        imageUrl: 'https://usmlestrike.b-cdn.net/wp-content/uploads/2023/08/cropped-indian-doctor-wearing-white-coat-with-stethoscope-scaled-1.webp'
    },
    {
        id: 5,
        name: 'Dr. Rajesh Gupta',
        specialization: 'Cardiology',
        address: '234, Heartbeat Avenue, Kolkata, India',
        phoneNumber: '+91 9876543214',
        type: 'verify',
        email: 'dr.rajesh.gupta@gmail.com',
        imageUrl: 'https://th.bing.com/th/id/OIP.V5C0zCODJJzdjsvoWFRndgHaJz?rs=1&pid=ImgDetMain'
    },
];


const Doctor = () => {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');
    const [place, setPlace] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [specialization, setspecialization] = useState('');
    const [Availability, setAvailability] = useState('');
    const [Issue, setIssue] = useState('');
    const [Experience, setExperience] = useState('');
    const handleCreateButtonClick = () => {
        setOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
    };


    const handleEditDialogOpen = (card) => {
        setEditName(card.name);
        setEditId(card.id);
        setEditPhoneNumber(card.phoneNumber);
        setEditEmail(card.email);
        setEditPlace(card.address);
        setEditSpecialization(card.specialization);
        setEditDialogOpen(true);
    };

    const handleEditDialogClose = () => {
        setEditDialogOpen(false);
    };

    // Function to handle updating doctor details
    const handleEditDoctor = () => {
        // Perform the necessary actions to update doctor details
        console.log("Updated Name:", editName);
        console.log("Updated ID:", editId);
        console.log("Updated Phone Number:", editPhoneNumber);
        // Close the dialog
        handleEditDialogClose();
    };
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [editName, setEditName] = useState('');
    const [editId, setEditId] = useState('');
    const [editPhoneNumber, setEditPhoneNumber] = useState('');
    const [editEmail, setEditEmail] = useState(''); // Added declaration
    const [editPlace, setEditPlace] = useState(''); // Added declaration
    const [editSpecialization, setEditSpecialization] = useState(''); // Added declaration
    const theme = createTheme({
        palette: {
            primary: {
                main: '#DC7844', // Set your primary color here
            },
        },
    });
    const [selectedCity, setSelectedCity] = useState('');
    const handleChange = (event) => {
        setSelectedCity(event.target.value);
    };
    return (
        <ThemeProvider theme={theme} >
            <Grid style={{
                backgroundColor: "#ffffff", height: "60px", display: "flex",
                flexDirection: "row", justifyContent: "space-between", alignItems: "center",
            }} >
                <Grid style={{ flexDirection: "column", padding: "0 0 0 15px", }}><Typography variant="h5" style={{
                    fontFamily: "sans-serif", fontSize: "18px", fontWeight: 600,
                    color: "#05445E"
                }}>Doctors</Typography>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "12px", }}>
                        <Link underline="hover" color="inherit" to="/dashboard" style={{textDecoration:"none",color: "inherit"}}>
                            Home
                        </Link>
                        <Typography color="#189ab4">Doctors</Typography>
                    </Breadcrumbs>
                </Grid>

               
                <IconButton sx={{ marginRight: "10px" }}>
                <Link to="/doctor-request">
                    <Badge badgeContent={4} color="warning">
                        <BsChatTextFill style={{ color: "#05445E" }} />
                    </Badge>
                    </Link>
                </IconButton>
              

            </Grid>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"

            >
                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" marginBottom="5px">
                    <TextField
                        label="Search"
                        variant="outlined"
                        size="small"
                        value={searchText}
                        onChange={handleSearchChange}
                        InputProps={{ style: { color: "#000" } }}
                    />
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: "#DC7844", color: "#FFFFFF", marginLeft: "10px",
                            marginBottom: "5px", marginTop: "20px"
                        }}
                        onClick={handleCreateButtonClick}
                    >
                        Create
                    </Button>
                    <Dialog open={open} onClose={handleDialogClose}>
                        <DialogTitle style={{ color: '#033043', fontFamily: "Lato", fontSize: "30px", }}>Create From</DialogTitle>
                        <DialogContent>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        label="Id"
                                        type="number"
                                        fullWidth
                                        value={id}
                                        onChange={(e) => setId(e.target.value)}

                                    />
                                    <TextField
                                        margin="dense"
                                        label="Email"
                                        type="email" // corrected type from "Email" to "email"
                                        fullWidth
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <MailOutlineIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="Phone Number"
                                        type="tel" // corrected type from "Phone Number" to "tel"
                                        fullWidth
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <CallIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="Specialization"
                                        type="text"
                                        fullWidth
                                        value={specialization}
                                        onChange={(e) => setspecialization(e.target.value)}
                                    />
                                    <TextField
                                        label="Issue"
                                        type="text"
                                        fullWidth
                                        value={Issue}
                                        onChange={(e) => setIssue(e.target.value)}
                                        style={{ marginTop: "10px" }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        margin="dense"
                                        label="Name"
                                        type="text"
                                        fullWidth
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <FaceIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="Password"
                                        type="password"
                                        fullWidth
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <PasswordIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="Place"
                                        type="text"
                                        fullWidth
                                        value={place}
                                        onChange={(e) => setPlace(e.target.value)}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <PlaceIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <TextField
                                        margin="dense"
                                        label="Availability"
                                        type="text"
                                        fullWidth
                                        value={Availability}
                                        onChange={(e) => setAvailability(e.target.value)}
                                    />
                                    <TextField
                                        label="Experience"
                                        variant="outlined"
                                        type="number"
                                        fullWidth
                                        value={Experience}
                                        onChange={(e) => setExperience(e.target.value)}
                                        sx={{ mt: 1 }} // Add margin-top
                                    />
                                </Grid>
                            </Grid>
                            <TextField
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                fullWidth
                                sx={{ mt: 2 }} // Add margin-top
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDialogClose} style={{ borderColor: '#DC7844', color: '#DC7844' }} variant="outlined">
                                Cancel
                            </Button>
                            <Button onClick={handleDialogClose} style={{ borderColor: '#DC7844', color: '#DC7844', marginRight: "30px" }} variant="outlined">
                                Save
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </Box>

            <Grid container spacing={2} justifyContent="flex-start" alignItems="center">
                {cardData.map((card) => (
                    <Grid item key={card.id}>
                        <Card key={card.id} sx={{ width: 225, }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image={card.imageUrl}
                                    alt="green iguana"
                                    sx={{
                                        position: 'relative', height: "270px",
                                    }}
                                    onClick={() => navigate('/doctor-profile')}
                                />
                                {card.type === 'verify' && (
                                    <img src={stamp} alt="stamp" style={{ position: 'absolute', top: 0, left: 0, width: 40, height: 40 }} />
                                )}
                                <IconButton
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        color: 'black',
                                    }}
                                    onClick={handleClick}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={() => handleEditDialogOpen(card)}>Edit</MenuItem>

                                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                                </Menu>
                                <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
                                    <DialogTitle style={{ color: "#033043", fontFamily: "Lato", fontSize: "28px", }}>Edit From</DialogTitle>
                                    <DialogContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <TextField
                                                    margin="dense"
                                                    label="ID"
                                                    type="number"
                                                    fullWidth
                                                    value={editId}
                                                    onChange={(e) => setEditId(e.target.value)}
                                                />

                                                <TextField
                                                    margin="dense"
                                                    label="Email"
                                                    type="text"
                                                    fullWidth
                                                    value={editEmail}
                                                    onChange={(e) => setEditEmail(e.target.value)}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <MailOutlineIcon />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                                <TextField
                                                    margin="dense"
                                                    label="Phone Number"
                                                    type="text"
                                                    fullWidth
                                                    value={editPhoneNumber}
                                                    onChange={(e) => setEditPhoneNumber(e.target.value)}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <CallIcon />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    margin="dense"
                                                    label="Name"
                                                    type="text"
                                                    fullWidth
                                                    value={editName}
                                                    onChange={(e) => setEditName(e.target.value)}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <FaceIcon />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                                <TextField
                                                    margin="dense"
                                                    label="Password"
                                                    type="text"
                                                    fullWidth
                                                    value={editId}
                                                    onChange={(e) => setEditId(e.target.value)}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <PasswordIcon />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />


                                                <TextField
                                                    margin="dense"
                                                    label="Specialization"
                                                    type="text"
                                                    fullWidth
                                                    value={editSpecialization}
                                                    onChange={(e) => setEditSpecialization(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    margin="dense"
                                                    label="Place"
                                                    type="text"
                                                    fullWidth
                                                    value={editPlace}
                                                    onChange={(e) => setEditPlace(e.target.value)}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <PlaceIcon />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleEditDialogClose} style={{ borderColor: '#DC7844', color: '#DC7844' }} variant="outlined">
                                            Cancel
                                        </Button>
                                        <Button onClick={handleEditDoctor} style={{ borderColor: '#DC7844', color: '#DC7844', marginRight: "30px" }} variant="outlined">
                                            Save
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                <CardContent onClick={() => navigate('/doctor-profile')}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.name}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ marginTop: "-8px", marginBottom: "5px" }}>
                                        {card.specialization}
                                    </Typography>
                                    <Divider />
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: 13, marginTop: '5px' }}>
                                        Address: {card.address}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: 13 }}>
                                        Phone: {card.phoneNumber}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: 13 }}>
                                        Email: {card.email}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </ThemeProvider>
    );
};

export default Doctor;