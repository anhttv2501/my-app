import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
const Menu = () => {
    return (
        <Nav className='d-flex flex-row' style={{
            marginLeft: 200,
            marginRight: 200
        }} >
            <NavLink className='p-3' style={({ isActive }) => ({
                color: isActive ? 'chocolate' : '#fff',
                textDecoration: 'none',
                fontSize: isActive ? '24px' : '20px'
            })} to="/"> Home </NavLink>
            <NavLink className='p-3' style={({ isActive }) => ({
                color: isActive ? 'chocolate' : '#fff',
                textDecoration: 'none',
                fontSize: isActive ? '24px' : '20px'
            })} to="/about" > About </NavLink>
            <NavLink className='p-3' style={({ isActive }) => ({
                color: isActive ? 'chocolate' : '#fff',
                textDecoration: 'none',
                fontSize: isActive ? '24px' : '20px'
            })} to="/blog" > Blog </NavLink>
            <NavLink className='p-3' style={({ isActive }) => ({
                color: isActive ? 'chocolate' : '#fff',
                textDecoration: 'none',
                fontSize: isActive ? '24px' : '20px'
            })} to="/contact" >Contact</NavLink>
        </Nav>
    );
}
export default Menu;
