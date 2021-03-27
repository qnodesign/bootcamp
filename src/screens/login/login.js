import { useState } from "react";
import md5 from "md5";
import { Form, Button } from "semantic-ui-react";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const handleOnChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleLoginSubmit = (_) => {
    const submission = {
      ...form,
      password: md5(form.password)
    };
    console.log(submission);
  };

  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Field>
          <label>Username</label>
          <input
            name="username"
            placeholder="Username"
            type="text"
            onChange={handleOnChange}
            value={form.username}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleOnChange}
            value={form.password}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default Login;
