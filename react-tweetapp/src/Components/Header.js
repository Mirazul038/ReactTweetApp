import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormGroup, FormControl, ControlLabel, Nav, Navbar, Container } from "react-bootstrap";
import "./LoginStyles.css"
import twitterImage from '../Images/twitterImage.jpg';

function Header(props){
    const testme = () => {
        console.log("tested");
    }
    return(
        <div className="bodies">
            <Navbar bg="light" variant="light">
    <Container>
    <img src={twitterImage} width="85" height="63"/>
    <Nav className="me-auto">
      <Nav.Link onClick={()=> {props.headerEvent("PostTweet")}} >Post Tweet</Nav.Link>
      <Nav.Link onClick={()=> {props.headerEvent("MyTweets")}}>My Tweets</Nav.Link>
      <Nav.Link onClick={()=> {props.headerEvent("AllTweets")}}>All Tweets</Nav.Link>
      <Nav.Link onClick={()=> {props.headerEvent("AllUsers")}} >Users</Nav.Link>
      <Nav.Link onClick={()=> {props.headerEvent("ResetPassword")}}>Reset Password</Nav.Link>
      <Nav.Link onClick={()=> {props.headerEvent("Logout")}} >Logout</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
}

export default Header;