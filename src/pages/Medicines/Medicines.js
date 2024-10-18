import React, { useState } from "react";
import {
  AppBar,
  TablePagination,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell, Breadcrumbs, Link,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  Grid,
} from "@mui/material";
import {
  Search as SearchIcon,
  AddCircle as AddCircleIcon,
  CloudDownload as DownloadIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Import createTheme
import Box from "@mui/material/Box";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Inventory2Icon from "@mui/icons-material/Inventory2";

// Create a theme object using createTheme
const theme = createTheme();

function Medicine({ handleSearch, handleAdd }) {
  // Sample data for the table
  const rows = [
    {
      sno: 1,
      medicineName: "Paracetamol",
      category: "Tablet",
      companyName: "Sky Pharma",
      purchaseDate: "02-25-2021",
      price: "$50",
      expiryDate: "02-25-2025",
      stock: 234,
    },
    {
      sno: 2,
      medicineName: "Amoxicillin",
      category: "Injectable",
      companyName: "Mandud Pharma",
      purchaseDate: "05-07-2022",
      price: "$23",
      expiryDate: "05-07-2025",
      stock: 30,
    },
    {
      sno: 3,
      medicineName: "Ibuprofen",
      category: "Tablet",
      companyName: "Sun Pharma",
      purchaseDate: "03-15-2023",
      price: "$35",
      expiryDate: "03-15-2026",
      stock: 100,
    },
    {
      sno: 4,
      medicineName: "Ciprofloxacin",
      category: "Injectable",
      companyName: "Medico Labs",
      purchaseDate: "07-20-2023",
      price: "$42",
      expiryDate: "07-20-2026",
      stock: 50,
    },
    {
      sno: 5,
      medicineName: "Aspirin",
      category: "Tablet",
      companyName: "Global Pharma",
      purchaseDate: "09-10-2023",
      price: "$20",
      expiryDate: "09-10-2026",
      stock: 150,
    },
    {
      sno: 6,
      medicineName: "Diazepam",
      category: "Tablet",
      companyName: "Calmex Pharmaceuticals",
      purchaseDate: "11-05-2023",
      price: "$28",
      expiryDate: "11-05-2026",
      stock: 75,
    },
    {
      sno: 7,
      medicineName: "Lorazepam",
      category: "Tablet",
      companyName: "Relaxo Pharma",
      purchaseDate: "01-12-2024",
      price: "$30",
      expiryDate: "01-12-2027",
      stock: 90,
    },
    {
      sno: 8,
      medicineName: "Insulin",
      category: "Injectable",
      companyName: "Diabetes Care",
      purchaseDate: "04-18-2024",
      price: "$55",
      expiryDate: "04-18-2027",
      stock: 25,
    },
    {
      sno: 9,
      medicineName: "Warfarin",
      category: "Tablet",
      companyName: "Blood Care",
      purchaseDate: "06-30-2024",
      price: "$45",
      expiryDate: "06-30-2027",
      stock: 60,
    },
    {
      sno: 10,
      medicineName: "Levothyroxine",
      category: "Tablet",
      companyName: "Thyro Pharma",
      purchaseDate: "09-22-2024",
      price: "$38",
      expiryDate: "09-22-2027",
      stock: 80,
    },
    {
      sno: 11,
      medicineName: "Acetaminophen",
      category: "Tablet",
      companyName: "Relief Pharma",
      purchaseDate: "12-05-2024",
      price: "$25",
      expiryDate: "12-05-2027",
      stock: 120,
    },
    // Add more rows as needed
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const [editedSno, setEditedSno] = useState("");
  const [editedName, setEditedName] = useState("");
  const [editedCompanyName, setEditedCompanyName] = useState("");
  const [editedDate, setEditedDate] = useState("");
  const [editedPrice, setEditedPrice] = useState("");
  const [editedcategory, setEditedCategory] = useState("");
  const [editedExpiryDate, setEditedExpiryDate] = useState("");
  const [editedStock, setEditedStock] = useState("");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [medicinename, setMedicineName] = useState("");
  const [category, setCategory] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [price, setPrice] = useState("");

  const [stock, setStock] = useState("");

  const handleClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setEditRow(row);
  };

  const handleAddDialogClose = () => {
    setAddDialogOpen(false);
  };

  const handleSave = () => {
    // Handle saving data here
    console.log("Name:", name);
    setAddDialogOpen(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = (row) => {
    handleClose();
    setEditedSno(row.sno);
    setEditedName(row.medicineName);
    setEditedCompanyName(row.companyName);
    setEditedCategory(row.category);
    setEditedDate(row.purchaseDate);
    setEditedPrice(row.price);
    setEditedExpiryDate(row.expiryDate);
    setEditedStock(row.stock);
    setEditDialogOpen(true);
    const theme = createTheme({
      palette: {
        primary: {
          main: "#DC7844", // Set your primary color here
        },
      },
    });
  };

  const handleDeleteClick = () => {
    // Handle delete action here
    handleClose();
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleSaveChanges = () => {
    // Handle saving changes here
    // For demonstration purposes, just log the edited values
    console.log("Edited Name:", editedName);
    console.log("Edited Company Name:", editedCompanyName);
    setEditDialogOpen(false);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#DC7844", // Set your primary color here
      },
    },
  });
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid style={{
        backgroundImage: 'linear-gradient(to right, #fff, #36c0d3)',marginTop:'10px', height: "60px", display: "flex",
        flexDirection: "row", justifyContent: "space-between", alignItems: "center",
      }} >
        <Grid style={{ flexDirection: "column", padding: "0 0 0 15px", }}><Typography variant="h5" style={{
          fontFamily: "sans-serif", fontSize: "18px", fontWeight: 600,
          color: "#05445E"
        }}>Medicines</Typography>
          <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "12px", }}>
            <Link underline="hover" color="inherit" href="/dashboard">
              Home
            </Link>
            <Typography color="#189ab4">Medicines</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>
     
        <Box
         
          sx={{
            marginTop: "15px",
          }}
        >
          <AppBar position="static" sx={{ backgroundColor: "#f7e3d9" }}>
            <Toolbar variant="dense">
              <TextField
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: "white",
                  width: "250px"
                }}
                onChange={handleSearch}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Box sx={{ position: "absolute", right: 0 }}>
                <IconButton
                  aria-label="add circle"
                  onClick={() => setAddDialogOpen(true)}
                  sx={{
                    backgroundColor: "#DC7844",
                    marginLeft: "10px",
                    color: "white",
                  }}
                >
                  <AddCircleIcon />
                </IconButton>
                <IconButton
                  aria-label="download"
                  sx={{
                    backgroundColor: "#DC7844",
                    marginLeft: "25px",
                    color: "white",
                  }}
                >
                  <DownloadIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>

          <Dialog open={addDialogOpen} onClose={handleAddDialogClose}>
            <DialogTitle
              style={{ color: "#033043", fontFamily: "Lato", fontSize: "28px" }}
            >
              New Medicine List
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={1}>
                {/* Grid item for Sno input */}
                <Grid item xs={6}>
                  <TextField
                    label="Sno"
                    value={name}
                    type="number"
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Medicine Name"
                    value={medicinename}
                    onChange={(e) => setMedicineName(e.target.value)}
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LocalHospitalIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  {/* Adding a category dropdown */}
                  <Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    fullWidth
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    style={{ marginTop: "14px" }}
                  >
                    <MenuItem value="" disabled>
                      Select Category
                    </MenuItem>
                    <MenuItem value="Category1">Tablet</MenuItem>
                    <MenuItem value="Category2">Syrup</MenuItem>
                    <MenuItem value="Category3">Injectable</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="CompanyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <AddBusinessIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Purchase Date"
                    value={purchaseDate}
                    onChange={(e) => setPurchaseDate(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Expiry Date"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <MonetizationOnIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Inventory2Icon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleAddDialogClose}
                sx={{
                  color: "#DC7844",
                  border: "1px solid #DC7844",
                  borderRadius: "5px",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                sx={{
                  color: "#DC7844",
                  border: "1px solid #DC7844",
                  borderRadius: "5px",
                }}
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sno</TableCell>
                  <TableCell>Medicine Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Purchase Date</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Expiry Date</TableCell>
                  <TableCell>Stock</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Pagination logic for rendering rows */}
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.sno}>
                      <TableCell>{row.sno}</TableCell>
                      <TableCell>{row.medicineName}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      <TableCell>{row.companyName}</TableCell>
                      <TableCell>{row.purchaseDate}</TableCell>
                      <TableCell>{row.price}</TableCell>
                      <TableCell>{row.expiryDate}</TableCell>
                      <TableCell>{row.stock}</TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="more"
                          onClick={(event) => handleClick(event, row)}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={() => handleEditClick(editRow)}>
                            Edit
                          </MenuItem>
                          <MenuItem onClick={handleDeleteClick}>
                            Delete
                          </MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Table pagination component */}
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            style={{ alignSelf: "center", width: "100%" }}
          />
          <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
            <DialogTitle
              style={{ color: "#033043", fontFamily: "Lato", fontSize: "28px" }}
            >
              Paracetamol
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Sno"
                    value={editedSno}
                    type="number"
                    onChange={(e) => setEditedSno(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Medicine Name"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LocalHospitalIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  {/* Adding a category dropdown */}
                  <Select
                    value={editedcategory}
                    onChange={(e) => setEditedCategory(e.target.value)}
                    fullWidth
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    style={{ marginTop: "14px" }}
                  >
                    <MenuItem value="Category1">Tablet</MenuItem>
                    <MenuItem value="Category2">Syrup</MenuItem>
                    <MenuItem value="Category3">Injectable</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Company Name"
                    value={editedCompanyName}
                    onChange={(e) => setEditedCompanyName(e.target.value)}
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <AddBusinessIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Purchase Date"
                    value={editedDate}
                    onChange={(e) => setEditedDate(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Expiry Date"
                    value={editedExpiryDate}
                    onChange={(e) => setEditedExpiryDate(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Price"
                    value={editedPrice}
                    onChange={(e) => setEditedPrice(e.target.value)}
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <MonetizationOnIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Stock"
                    value={editedStock}
                    onChange={(e) => setEditedStock(e.target.value)}
                    fullWidth
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Inventory2Icon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleEditDialogClose}
                sx={{
                  color: "#DC7844",
                  border: "1px solid #DC7844",
                  borderRadius: "5px",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSaveChanges}
                sx={{
                  color: "#DC7844",
                  border: "1px solid #DC7844",
                  borderRadius: "5px",
                }}
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
     
    </ThemeProvider>
  );
}

export default Medicine;