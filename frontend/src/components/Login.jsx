import React from "react";
import authStore from "../stores/authStore";

function Login() {
  const { loginForm, updateLoginForm, login, user } = authStore();

  if (user) {
    return <div>Welcome, {user.email}!</div>; // Show user info after login
  }

  return (
    <form onSubmit={login}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={loginForm.email}
          onChange={updateLoginForm}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={loginForm.password}
          onChange={updateLoginForm}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
