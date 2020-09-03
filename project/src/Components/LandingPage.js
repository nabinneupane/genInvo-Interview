import React from "react";
import Col from "react-bootstrap/Col";
import { Jumbotron } from "react-bootstrap";

const LandingPage = ({ handleClick, flag }) => {
  return (
    <Jumbotron
      className="mx-auto  p-2 my-4"
      style={{ backgroundColor: "darkgrey" }}
    >
      <Col sm={12} md={12}>
        <header className=" text-center p-0 my-3 display-4   border-bottom border-success ">
          Click a button below to list the most starred Github repos that were
          created in the last 30 days.
        </header>
      </Col>
      <Col>
        <section className="d-flex justify-content-center">
          <button
            variant="primary"
            class="btn btn-primary btn-lg"
            onClick={handleClick}
            disabled={flag}
          >
            Click me
          </button>
        </section>
      </Col>
    </Jumbotron>
  );
};

export default LandingPage;
