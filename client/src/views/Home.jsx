import axios from "axios";
import Context from "../store/Context";
import { useContext, useEffect } from "react";
import { ENDPOINT } from "../config/constans";
// import Gallery from './Gallery'

const Home = () => {
  const { setDeveloper } = useContext(Context);

  const getDeveloperData = () => {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      axios
        .get(ENDPOINT.users, { headers: { Authorization: `Bearer ${token}` } })
        .then(({ data: [user] }) => setDeveloper({ ...user }))
        .catch(() => {
          window.sessionStorage.removeItem("token");
          setDeveloper(null);
        });
    }
  };

  useEffect(getDeveloperData, []);

  return (
    <div>
      <div className="App">
        <h1>¡Comparte tu pasión!</h1>
        <h3>ofrece tu planta</h3>
      </div>
    </div>
  );
};

export default Home;
