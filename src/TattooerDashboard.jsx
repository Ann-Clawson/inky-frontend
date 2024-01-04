import axios from "axios";
import { useState, useEffect } from "react";

export function TattooerDashboard() {
  const [currentTattooer, setCurrentTattooer] = useState({});

  // eslint-disable-next-line no-unused-vars
  let tattooerID = localStorage.getItem("tattooer_id");

  const getUser = (tattooerID) => {
    axios.get(`http://localhost:3000/tattooers/${tattooerID}.json`).then((response) => {
      // console.log(response.data);
      setCurrentTattooer(response.data);
    });
  };

  useEffect(getUser, []);

  return (
    <div>
      <h1>Howdy {currentTattooer.first_name}!</h1>
      <h4>Here is a list of your applications:</h4>
    </div>
  );
}
