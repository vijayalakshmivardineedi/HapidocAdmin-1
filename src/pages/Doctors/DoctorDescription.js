import { Breadcrumbs, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import pdf from "../../assets/annex2-fm1.pdf";

const DoctorDescription = () => {
    return (

        <Grid>
            <Grid style={{
                backgroundColor: "#ffffff", height: "60px", display: "flex", width: "100%",
                flexDirection: "row", justifyContent: "space-between", alignItems: "center",
            }} >
                <Grid style={{
                    display: "flex", flexDirection: "column", justifyContent: "flex"
                }} >
                    <Typography variant="h5" style={{
                        fontFamily: "Poppins, sans-serif", fontSize: "22px", fontWeight: 600,
                        padding: "0 0 0 10px", color: "#05445E"
                    }}>Description</Typography>

                    <Breadcrumbs aria-label="breadcrumb">
                        <Link 
                       underline="hover"
                       color="inherit"
                       to="/doctors"
                       style={{
                           fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                           padding: "4px 0 0 10px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
                       }}>
                             Doctor
                        </Link>
                        
                        <Link
                            underline="hover"
                            color="inherit"
                            to="/doctor-request"
                            style={{
                                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                                padding: "4px 0 0 5px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
                            }}
                        >
                            Request
                        </Link>
                        <Typography color="#189ab4" >Description</Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>

            <Grid xs={12} md={12} style={{
                background: "#fff", width: "100%", height: "auto", marginTop: "40px", borderRadius: "5px", borderBottomRightRadius: "15px",
                borderBottomLeftRadius: "15px"
            }}>
                <Grid style={{
                    backgroundImage: 'url(https://img.freepik.com/free-photo/minimalistic-science-banner-with-stethoscope_23-2149431138.jpg?t=st=1710745125~exp=1710748725~hmac=6d1e582cdd26f7f04706e455802e511b0c914cefef1e82698045df07a0d75f84&w=996)',
                    height: "30vh",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    borderBottomRightRadius: "15px",
                    borderBottomLeftRadius: "15px"
                }}>

                </Grid>
                <Grid style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                }}>
                    <Grid style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                    }}>
                        <div style={{ marginRight: "24%", marginBottom: "15%" }}>
                            <img src="https://img.freepik.com/premium-photo/woman-white-lab-coat-with-stethoscope-her-neck-stands-with-her-arms-crossed_870833-22.jpg?w=740"
                                alt="Docter" style={{
                                    height: "190px",
                                    width: "190px",
                                    position: "absolute",
                                    top: "14%", // Add absolute positioning for the image
                                    bottom: 0, // Position the image at the bottom of the container
                                    left: "3%",
                                    border: "10px"
                                }} />
                        </div>
                        <div style={{ zIndex: "1", paddingTop: "1%", paddingLeft: "1.5%" }}>
                            <Typography variant="h5" style={{ color: "#05445E", fontWeight: "500", fontFamily: "Rubik, sans-serif" }}>Dr. Johen doe</Typography>
                            <Typography variant="h6" style={{ color: "#05445E", fontWeight: "300" }}> Join on 15 May 2019, 10:00 AM</Typography>

                        </div>


                    </Grid>
                </Grid>
            </Grid>

            <Grid style={{
                backgroundColor: "#ffffff", height: "auto", display: "flex", width: "100%",
                flexDirection: "row", justifyContent: "space-between", marginTop: "40px",
            }} >
                <Grid style={{ padding: "2%" }} >
                    <h2 style={{ color: "#05445E", fontWeight: "500", fontFamily: "Rubik, sans-serif", paddingBottom: "12px" }}>Details</h2>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Name : Dr.<span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> Johen doe</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Specialization : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> Gynaecologist</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Gender: <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> Female</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        City: <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> Visakhapatnam</span></p>
                </Grid>
                <Grid style={{ padding: "2%" }} >
                    <h2 style={{
                        color: "#05445E", fontWeight: "500",
                        fontFamily: "Rubik, sans-serif", paddingBottom: "12px"
                    }}>Medical Registration</h2>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Registration Nummber : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> 20244789547996</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Registartion Council : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> Delhi Medical Council</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Registartion Year : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> 2019</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                    </p>
                </Grid>
                <Grid style={{ padding: "2%" }} >
                    <h2 style={{
                        color: "#05445E", fontWeight: "500",
                        fontFamily: "Rubik, sans-serif", paddingBottom: "12px"
                    }}>Education Qualification</h2>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Degree : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> MD-Physician</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        College/Institute : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> NHS Hospital</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Year of completion: <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> 2019</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Year of experience: <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> 4</span></p>
                </Grid>
            </Grid>

            {/**SECOND CARD */}
            <Grid style={{
                backgroundColor: "#ffffff", height: "auto", display: "flex", width: "100%",
                flexDirection: "row", justifyContent: "space-between",
                marginTop: "40px",
            }} >
                <Grid style={{ padding: "2%" }} >
                    <h2 style={{
                        color: "#05445E", fontWeight: "500", fontFamily: "Rubik, sans-serif",
                        paddingBottom: "12px"
                    }}>Establishment Proof</h2>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        I am a consultant doctor</p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Document :
                        <a href={pdf} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color: "#05445E", 
                        fontWeight: "300", fontFamily: "Rubik, sans-serif"}}>
                            View PDF
                        </a> 
                        
                        </p>

                </Grid>


            </Grid>
            {/**Third CARD */}
            <Grid style={{
                backgroundColor: "#ffffff", height: "auto", display: "flex", width: "100%",
                flexDirection: "row", justifyContent: "space-between",
                marginTop: "40px",
            }} >

                <Grid style={{ padding: "2%" }} >
                    <h2 style={{
                        color: "#05445E", fontWeight: "500",
                        fontFamily: "Rubik, sans-serif", paddingBottom: "10px"
                    }}>Map Location</h2>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Phone Nummber : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>+919874561232</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Email : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> finedoc@gmail.com</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Street Address : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> Near Vathsalya Hospital , Mithilapure Vuda Colony , Madhurawada,, Visakhapatnam, 530041.</span></p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Current Location : <span style={{ color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}> Sri Sai Nelayam, Near MVV Ozone, Mithilapure Vuda Colony Road, Madhurawada, Visakhapatnam, 530041.</span></p>
                </Grid>


            </Grid>
            {/**Forth CARD */}
            <Grid style={{
                backgroundColor: "#ffffff", height: "auto", display: "flex", width: "100%",
                flexDirection: "row", justifyContent: "space-between",
                marginTop: "40px",
            }} >

                <Grid style={{ padding: "2%" }}>
                    <h2 style={{
                        color: "#05445E",
                        fontWeight: "500",
                        fontFamily: "Rubik, sans-serif",
                        paddingBottom: "10px"
                    }}>Proofs</h2>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Identity Proof : <a href={pdf} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",
                        color: "#05445E", fontWeight: "300", fontFamily: "Rubik, sans-serif"}}>
                            View PDF
                        </a>
                    </p>
                    <p style={{ color: "#011a24", fontWeight: "300", fontFamily: "Rubik, sans-serif" }}>
                        Medical Registration Proof :
                        <a href={pdf} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color: "#05445E", 
                        fontWeight: "300", fontFamily: "Rubik, sans-serif"}}>
                            View PDF
                        </a>

                
                </p>
            </Grid>

        </Grid>


        </Grid >
    )
}
export default DoctorDescription;