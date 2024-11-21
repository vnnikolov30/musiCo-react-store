import axios from "axios";

const URL = "http://localhost:3000";

export async function getAllInstruments() {
  const response = await axios.get(`${URL}/instruments`);
  if (response.status === 200) {
    return response.data;
  } else {
    return;
  }
}

export async function getAllAlbums() {
  const response = await axios.get(`${URL}/albums`);
  if (response.status === 200) {
    return response.data;
  } else {
    return;
  }
}

export async function getCategory(category) {}

export async function createUser(user) {
  const response = await axios.post(`${URL}/users`, user);
  return response;
}

export async function getUser(id) {
  const response = await axios.get(`${URL}/users/${id}`, get);
  if (response.status === 200) {
    return response.data;
  } else {
    return;
  }
}

export async function verifyUser(user) {
  const response = await axios.post(`${URL}/users/login`, user);
  if (response.data.success) {
    return response.data.token;
  } else {
    // throw new Error(response.statusText);
    return
  }
}
