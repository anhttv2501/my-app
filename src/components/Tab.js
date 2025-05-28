import { NavLink, Row, Col, Table } from "react-bootstrap";

const Tab = () => {
  return (
    <Row>
      <Col md={3}>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#pricing">Pricing</NavLink>
      </Col>
      <Col md={9}>
        <Table bordered striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Trinh thi</td>
              <td>Van Anh</td>
              <td>AnhTTV20</td>
            </tr>
            <tr>
              <td>2</td>
              <td>To an</td>
              <td>An</td>
              <td>AnTA</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};
export default Tab;
