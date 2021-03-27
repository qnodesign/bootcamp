import { useState } from 'react';
import {Form, Button, Input } from 'semantic-ui-react';

const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleLoginSubmit = (event) => {
    
  };

  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Field>
          <label>Username</label>
          <input name="username" placeholder='Username' type="text" value={form.username}/>
        </Form.Field>
        <Form.Field 
          id='form-input-control-error-email'
          control={Input}
          label='Email'
          placeholder='joe@schmoe.com'
          error = {
            {
              content: 'Please enter a valid email address',
              pointing: 'below'
            }
          }
/>
        <Form.Field>
          <label>Password</label>
          <input name="password" type="password" placeholder='Password' value={form.password}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  )
}

export default Login;

