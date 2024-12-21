import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Signup = ({ setNavbarVisible }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setNavbarVisible(false);
    return () => setNavbarVisible(true);
  }, [setNavbarVisible]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state

    try {
      const response = await fetch('http://localhost:8000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || 'Signup failed');
        return;
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/profile'); // Redirect to profile page
    } catch (error) {
      setError('Something went wrong. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="auth-input"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="auth-input"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="auth-input"
          required
        />
        {error && <p className="auth-error">{error}</p>}
        <button type="submit" className="auth-button">
          Signup
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <span className="link" onClick={() => navigate("/login")}>
          Login here
        </span>
      </p>
    </div>
  );
};

export default Signup;
