import logo from './logo.svg';
import './App.css';
import {Box, Container, extendTheme} from "@chakra-ui/react";
import { Form } from './Components/Form';
import { Layouts } from './Components/Layouts';





function App() {
  return (
    <Container border="1px solid red" maxWidth="2xl" >
      {/* <Form/> */}
      <Layouts />
    </Container>
  );
}

export default App;
