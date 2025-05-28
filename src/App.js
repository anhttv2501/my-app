import FunctionComponent from './components/FunctionComponent';
import Gallery,{Profile} from './components/Gallery';
import Header from './components/Header';
import {Container} from 'react-bootstrap';
import Tab from './components/Tab';
import Example1 from './components/Example1';
import Example2 from './components/Example2';

function App() {
  return (
    <Container>
    <Header/>
    <Tab/>
    <hr/>
    <Example1/>
    <hr/>
    <Example2/>
    {/* <FunctionComponent/>
    <Gallery/>
    <hr/>
    <Profile/> */}
    </Container>
  );
}

export default App;
