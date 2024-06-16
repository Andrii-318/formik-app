import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\d{12}$/;
    return re.test(String(phone));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
      valid = false;
    }

    if (!formData.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = "Invalid email format";
      valid = false;
    }

    if (!formData.phone) {
      errors.phone = "Phone number is required";
      valid = false;
    } else if (!validatePhone(formData.phone)) {
      errors.phone = "Phone number must be 12 digits";
      valid = false;
    }

    setErrors(errors);

    if (valid) {
      alert("Form submitted successfully");
      // You can add further actions here, such as sending form data to a server
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={styles.form}>
      <div style={styles.formGroup}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.name && <p style={styles.error}>{errors.name}</p>}
      </div>
      <div style={styles.formGroup}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}
      </div>
      <div style={styles.formGroup}>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.phone && <p style={styles.error}>{errors.phone}</p>}
      </div>
      <button
        type="submit"
        style={styles.button}>
        Submit
      </button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "5px",
  },
};

export default ContactForm;
