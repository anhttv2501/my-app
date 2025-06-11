import {Navbar, Form, FormControl, Button
} from 'react-bootstrap'
import Menu from './Menu'
const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" className='d-flex' >
            <img style={{ height: 50, width: 120 }}
                src="/logo512.png" />
            <Menu />
            <Form className='d-flex' >
                <FormControl type="text" placeholder="Search"
                    className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    );
}
export default Header;
