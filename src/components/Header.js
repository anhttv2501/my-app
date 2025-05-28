import {Navbar,NavbarBrand,Nav,
    NavLink,Form,FormControl,Button
} from 'react-bootstrap';
const Header=()=>{
   return (
    <Navbar bg='primary' variant='dark'>
       <NavbarBrand href='#home'>NavBar</NavbarBrand>
       <Nav className='mr-auto'>
        <NavLink href='#home'>Home</NavLink>
        <NavLink href='#features'>Features</NavLink>
        <NavLink href='#pricing'>Pricing</NavLink>
       </Nav>
       <Form className='d-flex'>
           <FormControl type='text' placeholder='Search'
            className='mr-sm-2' />
            <Button variant='outline-light'>Search</Button>
       </Form>
    </Navbar>
   );
}
export default Header;