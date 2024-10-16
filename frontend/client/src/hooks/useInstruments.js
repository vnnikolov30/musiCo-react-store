import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3000/instruments";

export function useGetAllInstruments() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    async function grabData() {
      try {
        const response = await axios.get(BASE_URL);
        if (response.status === 200) {
          setInstruments(response.data);
        }
      } catch (error) {
        console.error("Error fetching instruments:", error);
      }
    }
    grabData();
  }, []);

  return instruments;
}
