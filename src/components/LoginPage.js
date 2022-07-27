import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!email) {
        alert("email is required");
      }
      else if(!email.includes("@",",")) {
        alert("Please Enter Valid email");
      }
      else if (!password) {
        alert("enter password");
      }
      else if(!password.length > 3 && password.length < 20 ) {
        alert ("please enter valid password");
      }
      else {
        navigate("/productDetails");
      }
    };
  
  return (
    <>
    <Form>
        <h2>Login Form</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  
         onChange={(e) => setEmail(e.target.value)} required />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)}  required/>
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit} >
      Login
      </Button>
    </Form>
    </>
  );
}

export default LoginPage ;