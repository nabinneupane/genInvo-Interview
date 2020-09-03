import React, { useState } from "react";
import LandingPage from "./LandingPage";
import Container from "react-bootstrap/Container";
import axios from "axios";
import DisplayRepo from "./DisplayRepo";
import HandlePagination from "./HandlePagination";

const Main = () => {
  const [count, setCount] = useState(1);
  const [flag, setFlag] = useState(false);
  const [arr, setArr] = useState([]);
  const [stop, setStop] = useState(true);

  const [isFetching, setIsFetching] = HandlePagination(fetchMoreItems);
  var api_github = `https://api.github.com/search/repositories?q=created:>2020-05-22&sort=stars&order=desc&page=${count}`;

  //const { name, hasMore, loading, error } = OnClickButton(count);

  const handleClick = () => {
    axios(api_github)
      .then(({ data }) => {
        setFlag(true);
        let response = data.items;
        setArr(response);
        setCount(count + 1);
      })
      .catch((error) => {
        console.log("Error is: ", error);
        setArr([]);
      });
  };

  function fetchMoreItems() {
    if (stop) {
      setTimeout(() => {
        axios(api_github)
          .then(({ data }) => {
            setFlag(true);

            let response = data.items;
            setArr((prevState) => {
              return [...prevState, ...response];
            });
          })
          .catch((error) => {
            if (error.response.status === 403) setStop(false);
            setIsFetching(false);
          });
        setIsFetching(false);
        setCount(count + 1);
      }, 2000);
    } else {
      console.log(
        "Error. might failed with status code 403 i.e. limit exceed "
      );
    }
  }
  return (
    <Container fluid={true} className="p-0">
      <LandingPage handleClick={handleClick} flag={flag} />
      {flag && <DisplayRepo repo={arr} />}
      {isFetching && stop && (
        <div className="h4 text-center mb-4 p-3">
          Fetching more Items..... Have Patience
        </div>
      )}
      {!stop && (
        <div className="h4 text-center mb-4 p-3">
          Error status code thrown 403 Limit exceed... Cannot fetch from this
          point due to restriction .......
        </div>
      )}
    </Container>
  );
};

export default Main;
