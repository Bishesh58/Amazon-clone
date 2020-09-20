import axios from "axios";

const instance = axios.create({
  // baseURL: 'http://localhost:5001/clone-57fec/us-central1/api' //The local API url(cloud function)
  baseURL: "https://us-central1-clone-57fec.cloudfunctions.net/api",
});

export default instance;
