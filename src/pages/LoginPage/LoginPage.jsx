import React from 'react';
import './LoginPage.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react';

import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';

export default function LoginPage({ handleSignUpAndLogin }) {

  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const Navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);

      Navigate('/');
      handleSignUpAndLogin();

    } catch (err) {
      console.log(err);
      setError('check term and con');
    }
  }

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const [error, setError] = useState('');
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="red" textAlign='center'>
          Login
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              className='inputform'
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              className='inputform'
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Button type="submit" className='btn'>
              Login
            </Button>
          </Segment>
          <Message>
            New to Pokedex?<Link to='/signup'> Sign Up </Link>
          </Message>
        </Form>
      </Grid.Column>
    </Grid >
  );
}

