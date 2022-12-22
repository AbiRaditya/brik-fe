import axios from "axios";

const BrikApi = axios.create({
  baseURL: `https://brik-production.up.railway.app/`,
});
export default BrikApi;
