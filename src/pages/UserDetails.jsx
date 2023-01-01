import React, { useEffect } from "react";
import { Grid, Button, Card, CardContent, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleUser } from "../redux/actions";

const UserDetails = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.user);
  console.log('user :>> ', user);

  useEffect(() => {
    dispatch(getSingleUser(id))
    // eslint-disable-next-line
  }, [])



  return (
    <div>
      <h2>User Details</h2>

      <Grid container spacing={2}>
        <Grid item md={5} sm={8} sx={{ margin: "auto" }}>
          <Card sx={{ padding: 3, minWidth: 275, textAlign: "left" }}>
            <CardContent>
              <Typography sx={{ fontSize: 20, textTransform: "capitalize" }}>
                {user?.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {user?.email}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <b>{user?.address}</b>
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {user?.contact}
              </Typography>
              <Button
                color="error"
                variant="contained"
                onClick={() => navigate('/')}
              >
                Go Back
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default UserDetails