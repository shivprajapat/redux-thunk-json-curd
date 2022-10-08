import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  Grid,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../redux/actions";

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
  const users = useSelector((state) => state.users.data);
  console.log("users :>> ", users);
  useEffect(() => {
    dispatch(loadUsers());
    // eslint-disable-next-line 
  }, []);
  return (
    <div className="home">
      <Grid container spacing={2}>
        <Grid item xs={10} sx={{ margin: "auto" }}>
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
                {users.map((user, i) => {
                  const { name, address, email, contact } = user;
                  return (
                    <StyledTableRow key={i}>
                      <StyledTableCell component="th" scope="row">
                        {i + 1}
                      </StyledTableCell>
                      <StyledTableCell>{name}</StyledTableCell>
                      <StyledTableCell>{email}</StyledTableCell>
                      <StyledTableCell>{address}</StyledTableCell>
                      <StyledTableCell>{contact}</StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;