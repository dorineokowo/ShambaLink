import React, { useState } from "react";
import "./Signup.css";

const mockDatabase = [
  {
    username: "testuser",
    email: "testuser@example.com",
    phone: "1234567890",
  },
  // Add other existing users if needed
];

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    location: "",
  });

  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate the form and check if credentials already exist in the "database"
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      fullName,
      email,
      phone,
      username,
      password,
      confirmPassword,
      location,
    } = formData;

    // Check if all fields are filled
    if (
      !fullName ||
      !email ||
      !phone ||
      !username ||
      !password ||
      !confirmPassword ||
      !location
    ) {
      setError("All fields are required.");
      return;
    }

    // Check if password is at least 6 characters
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Check if username or email already exists in the database
    const userExists = mockDatabase.some(
      (user) =>
        user.username === username ||
        user.email === email ||
        user.phone === phone
    );

    if (userExists) {
      setError("User already exists. Please use different credentials.");
      return;
    }

    // If all checks pass
    setError("");
    alert("Signup successful! Welcome to ShambaLink!");
    // Reset form after success
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      confirmPassword: "",
      location: "",
    });
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        {error && <p className="error-message">{error}</p>}

        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="signup-btn">
          Sign Up
        </button>

        <p className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
