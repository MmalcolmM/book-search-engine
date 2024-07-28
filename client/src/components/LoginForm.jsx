import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../graphql/queries';

const LoginForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formState.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Your password"
        value={formState.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
      {error && <div>Login failed</div>}
    </form>
  );
};

export default LoginForm;
