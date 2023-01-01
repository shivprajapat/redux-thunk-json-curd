import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Grid, Box, TextField, Paper, Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleUser, getUpdateUser } from "../redux/actions";

const EditUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });
  const { name, email, address, contact } = state;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  useEffect(() => {
    dispatch(getSingleUser(id))
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (user) {
      setState({ ...user })
    }
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    if (!name || !email || !address || !contact) {
      toast.error("please enter a valid address")
    } else {
      dispatch(getUpdateUser(state, id))
      toast.success("User Data Successfully Added!")
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  return (
    <div>
      <h2>Edit User</h2>

      <Grid container spacing={2}>
        <Grid item md={5} sm={8} sx={{ margin: "auto" }}>
          <Paper sx={{ padding: 3, marginTop: 5 }}>
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { mt: 1 } }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                margin="dense"
                size="small"
                name="name"
                fullWidth
                onChange={handleChange}
                value={name || ''}
                type="text"
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                margin="dense"
                size="small"
                name="email"
                fullWidth
                onChange={handleChange}
                value={email || ''}
                type="email"
              />{" "}
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                margin="dense"
                size="small"
                name="address"
                fullWidth
                onChange={handleChange}
                value={address || ''}
                type="text"
              />
              <TextField
                id="outlined-basic"
                label="Contact"
                variant="outlined"
                margin="dense"
                size="small"
                name="contact"
                fullWidth
                onChange={handleChange}
                value={contact || ''}
                type="text"
              />
              <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mt={3}
              >
                <Button
                  color="error"
                  variant="contained"
                  onClick={() => navigate('/')}
                >
                  Go Back
                </Button>
                <Button color="success" variant="contained" type="submit">Update</Button>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

    </div>
  );
};

export default EditUser;
