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

export async function getCategory(category) {}
