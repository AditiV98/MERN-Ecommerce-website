import axios from "axios";
const url = "http://localhost:4000/user";

export const signup = (user) => {
  return axios
    .post(url, user)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const login = (email, password) => {
  const config = { headers: { "Content-Type": "application/json" } };
  return axios
    .post("/api/login", { email, password }, config)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getTask = (newTask) => {
  return axios.get(url);
};

export const deleteTask = (id) => {
  console.log(url);
  console.log(id);
  return axios.delete(`${url}/${id}`);
};
