import axios from "axios";

const api = {
  getProfileDetails: () =>
    axios.get("https://api.github.com/users/supreetsingh247").then(r => r.data),
  getRepositories: () =>
    axios
      .get("https://api.github.com/users/supreetsingh247/repos")
      .then(r => r.data)
};

export default api;
