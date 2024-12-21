import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Auth.css";

const Login = ({ setNavbarVisible }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setNavbarVisible(false);
    return () => setNavbarVisible(true);
  }, [setNavbarVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.error || 'Login failed');
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="auth-input"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="auth-input"
          required
        />
        <button type="submit" className="auth-button">
          Login Now
        </button>
      </form>
      <p className="switch-text">
        New User?{" "}
        <span className="link" onClick={() => navigate("/signup")}>
          Signup here
        </span>
      </p>
    </div>
  );
};

export default Login;