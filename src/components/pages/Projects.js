import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap';

function Projects() {
  return (
    <Row>
      <Col md="4">
        <Card>
          <CardHeader>
            <CardTitle tag="h2">
              <a href="https://taxokeys.org/home">TaxoKeys</a>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <p><b>
              In an era where traditional methods fall short, TaxoKeys offers a modern solution that democratizes access to identification resources.
            </b></p>
            Using dynamic algorithms, TaxoKeys generates elegant, flowchart-style guides to identification in real time,
            resolving complex relationships between species with minimal error.
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default Projects