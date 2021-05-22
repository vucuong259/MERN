import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const LoginForm = () => {
	// Context
	const {loginUser} = useContext(AuthContext)

	// Router
	const history = useHistory();

	// Local state
  const [loginForm, setloginForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginForm;

  const onChangeLoginForm = e => {
    setloginForm({...loginForm, [e.target.name]: e.target.value });
  };

	const login = async e => {
		e.preventDefault();
		try {
			const loginData = await loginUser(loginForm);
			if(loginData.success){
				history.push('/dashboard')
			} else {
				
			}
		} catch (error) {
			console.log(error)
		}
		
	}

  return (
    <>
      <Form className="my-4" onSubmit={login}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onChangeLoginForm}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChangeLoginForm}
            required
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Login
        </Button>
      </Form>
      <p>
        Don't have an account
        <Link to="/register">
          <Button variant="info" size="sm" className="ml-2">
            Register
          </Button>
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
