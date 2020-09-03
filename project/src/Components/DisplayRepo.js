import React from "react";
import { Container, Row } from "react-bootstrap";
import ContentPage from "./ContentPage";
const DisplayRepo = ({ repo }) => {
  console.log("repo", repo);
  return (
    <Container fluid={true}>
      {typeof repo === "undefined" ? (
        <Row className="h3 mx-auto text-dark  py-5 my-5">
          There are no more Repo to display
        </Row>
      ) : (
        repo.map((value) => <ContentPage key={value.id} input={value} />)
      )}
    </Container>
  );
};

export default DisplayRepo;
