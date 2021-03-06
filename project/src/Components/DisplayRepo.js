import React from "react";
import { Container, Row } from "react-bootstrap";
import ContentPage from "./ContentPage";

const DisplayRepo = ({ repo }) => {
  var count = 0;
  return (
    <Container fluid={true} className="p-0 ">
      {typeof repo === "undefined" ? (
        <Row className="h3 mx-auto text-dark  py-5 my-5">
          There are no more Repo to display
        </Row>
      ) : (
        repo.map((value) => <ContentPage key={count++} input={value} />)
      )}
    </Container>
  );
};

export default DisplayRepo;
