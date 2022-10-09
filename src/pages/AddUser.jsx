import { Grid, Box, TextField, Paper, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });
  const { name, email, address, contact } = state;
  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <h2>Add User</h2>
      <Grid container spacing={2}>
        <Grid item md={5} sm={8} sx={{ margin: "auto" }}>
          <Paper sx={{ padding: 3, marginTop: 5 }}>
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { mt: 1 } }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                margin="dense"
                size="small"
                name="name"
                fullWidth
                onChange={handleChange}
                value={name}
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
                value={email}
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
                value={address}
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
                value={contact}
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
                  onClick={() => navigate("/")}
                >
                  Go Back
                </Button>
                <Button color="success" variant="contained" type="submit">
                  Submit
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddUser;
