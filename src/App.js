import { useState } from 'react';
import {Button,Container,Nav,Navbar,Row,Col} from 'react-bootstrap';
import './App.css';
import data from './components/data.js'
import { Routes, Route,Link,useNavigate,Outlet } from 'react-router-dom';
import Detail from './routes/Detail.jsx';

function App() {
  let [shoes] = useState(data)
  let navigate = useNavigate()

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">니고네고</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>상세페이지</Nav.Link>
          </Nav>
        </Container>
      <Button variant="primary">Primary</Button>
      </Navbar>


      <Routes>
        <Route path='/' element={<div>
          <div className="container">
        <div className="row">
          {
            shoes.map((a,i)=>{
              return(
                <Card shoes={shoes[i]} i={1}></Card>
              )
            })
          }
        </div>
      </div>
        </div>}  />
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}  />
        <Route path='*' element={<div>없는페이지요</div>}  />
      </Routes>
      

    </div>
  );
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}


export default App;
