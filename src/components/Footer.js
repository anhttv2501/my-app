import { Alert } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Menu from "./Menu";
const Footer = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Alert variant="primary" style={{ marginLeft: 30, marginRight: 50 }}>
        <h4 style={{ width: 250 }}>AnhTTV20 © 2023</h4>
      </Alert>
      <Menu />
    </Navbar>
  );
};
export default Footer;
