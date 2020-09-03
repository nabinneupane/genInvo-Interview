import React, { useState } from "react";
import LandingPage from "./LandingPage";
import OnClickButton from "./OnClickButton";
import Container from "react-bootstrap/Container";
import axios from "axios";
import DisplayRepo from "./DisplayRepo";

const Main = () => {
  const [count, setCount] = useState(1);
  const [flag, setFlag] = useState(false);
  const [arr, setArr] = useState([]);
  const api_github = `https://api.github.com/search/repositories?q=created:>2020-05-22&sort=stars&order=desc&page=${count}`;

  //const { name, hasMore, loading, error } = OnClickButton(count);

  const handleClick = () => {
    axios(api_github)
      .then(({ data }) => {
        setFlag(true);
        let response = data.items;
        setArr(response);
      })
      .catch((error) => {
        console.log("Error is: ", error);
        setArr([]);
      });
  };

  return (
    <Container fluid={true}>
      <LandingPage handleClick={handleClick} flag={flag} />
      {flag && <DisplayRepo repo={arr} />}
    </Container>
  );
};

export default Main;
