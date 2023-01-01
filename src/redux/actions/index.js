import axios from "axios";
import * as types from "../actionTypes";

// ? GET Users
const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        // console.log("resp :>> ", resp);
        dispatch(getUsers(resp));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// ? DELETE Users

const userDelete = () => ({
  type: types.DELETE_USER,
});

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        // console.log("deleteUser :>> ", resp);
        dispatch(userDelete());
        dispatch(loadUsers());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// ? POST Users

const userAdded = () => ({
  type: types.ADD_USER,
});

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((resp) => {
        // console.log("userAdded :>> ", resp);
        dispatch(userAdded());
        dispatch(loadUsers());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// ? GET Single User

const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

export const getSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        console.log("getUser :>> ", resp);
        dispatch(getUser(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// ? PUT Update User

const userUpdate = (user) => ({
  type: types.UPDATE_USER,
  payload: user,
});

export const getUpdateUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then((resp) => {
        console.log("getUser :>> ", resp);
        dispatch(userUpdate());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
