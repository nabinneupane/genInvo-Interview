import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const ContentPage = ({ input }) => {
  const { name, description, stargazers_count, open_issues_count } = input;
  const { login, avatar_url, node_id } = input.owner;
  //   console.log(
  //     "Name: ",
  //     name,
  //     " description: ",
  //     description,
  //     " starred: ",
  //     stargazers_count,
  //     " issue: ",
  //     open_issues_count,
  //     avatar_url,
  //     " login: ",
  //     login
  //   );
  return (
    <Container fluid={true} className="p-2 mb-4 border-bottom border-dark">
      <Row>
        <Col md={5}>
          <img
            src={avatar_url}
            alt={node_id}
            width={500}
            height={300}
            model="fit"
            className="img-responsive"
          ></img>
        </Col>
        <Col>
          <span className="h1 border-bottom border-white mb-2">{name}</span>
          <div className="text-white p-2 my-4 h4"> {description}</div>
          <div className="d-flex justify-content-between mt-5">
            <span className="border-bottom ">
              <span className="h4">stars: </span>{" "}
              <span className="text-white h5">{stargazers_count} </span>
            </span>
            <span className=" border-bottom ">
              <span className="h4">issues: </span>
              <span className="text-white h5">{open_issues_count} </span>
            </span>
            <p className="h5"> Submitted 30 days ago by {login}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContentPage;
