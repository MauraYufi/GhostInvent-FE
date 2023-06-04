import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/balances/`;

// Get all balances
const getBalances = async () => {
    const response = await axios.get(API_URL);
    return response.data;
  };

const balance = {
    getBalances
};
  
export default balance;