import React from "react";
import authStore from "../stores/authStore";

function Register() {
  const { registerForm, updateRegisterForm, signup, user } = authStore();

  if (user) {
    return <div>Welcome, {user.email}!</div>; // Show user info after registration
  }

  return (
    <form onSubmit={signup}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={registerForm.email}
          onChange={updateRegisterForm}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={registerForm.password}
          onChange={updateRegisterForm}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
