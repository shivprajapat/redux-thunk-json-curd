import React, {  useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  Grid,
  ButtonGroup,
  IconButton,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from "@mui/icons-material/Edit";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";
import { Box } from "@mui/system";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.data);
  console.log("users :>> ", users);
  useEffect(() => {
    dispatch(loadUsers());
    // eslint-disable-next-line
  }, []);
  const handleDelete = (id) => {
    toast.success("User has been Delete Successfully!")
    
    dispatch(deleteUser(id));
  };
  console.log("users && users.id", users && users.id);
  return (
    <div className="home">
      <Grid container spacing={2}>
        <Grid item xs={10} sx={{ margin: "auto" }}>
          <Box sx={{ textAlign: "right" }} mb={2}>
            <Button onClick={()=>navigate('/add-user')} variant="contained" color="secondary">
              Add User
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 600 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Sr No.</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Phone</StyledTableCell>
                  <StyledTableCell>Address</StyledTableCell>
                  <StyledTableCell>Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users &&
                  users.map((user, i) => {
                    const { id, name, address, email, contact } = user;
                    return (
                      <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                          {i + 1}
                        </StyledTableCell>
                        <StyledTableCell>{name}</StyledTableCell>
                        <StyledTableCell>{email}</StyledTableCell>
                        <StyledTableCell>{address}</StyledTableCell>
                        <StyledTableCell>{contact}</StyledTableCell>
                        <StyledTableCell>
                          <ButtonGroup
                            variant="contained"
                            aria-label="outlined primary button group"
                            sx={{ boxShadow: "none" }}
                          >
                            <IconButton aria-label="delete" size="small" onClick={()=> navigate(`/edit-user/${id}`)}>
                              <EditIcon color="primary" />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              size="small"
                              onClick={() => handleDelete(id)}
                            >
                              <DeleteIcon color="error" />
                            </IconButton>
                            <IconButton aria-label="delete" size="small" onClick={()=> navigate(`/user-details/${id}`)}>
                              <RemoveRedEyeIcon color="primary" />
                            </IconButton>
                          </ButtonGroup>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      </div>
  );
};

export default Home;
