import './App.css';
import styled,{ThemeProvider} from 'styled-components';
import {darkTheme,lightTheme} from "./utils/Theme";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

const Container = styled.div`

  width:100%;
  height:100vh;
  display:flex;
  background:#15171E;
  color:#F2F3F4;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`
const Wrapper = styled.div`

  height:100%;
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  flex:3;
`

function App() {

  return (

      <ThemeProvider theme={darkTheme}>

        <Container>

          <Wrapper>

            <Navbar></Navbar>
            <Routes>

              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/post' element={<CreatePost></CreatePost>}></Route>

            </Routes>

          </Wrapper>

        </Container>
        
      </ThemeProvider>

  );
}

export default App;
