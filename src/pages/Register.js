import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const { login } = useAuth(); // Use the same login function for simplicity

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    }),
    onSubmit: (values) => {
      login(values.email); // Simulate registration and login
    },
  });

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
