import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../Context/AuthContext";

const Register = () => {
    const { register } = useAuth();

    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    });

    const handleSubmit = (values, { resetForm }) => {
        register(values.name, values.email, values.password);
        alert("Registration Successful!");
        resetForm();
    };

    return (
        <div>
            <h2>Register</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field type="text" id="name" name="name" />
                            <ErrorMessage name="name" component="div" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field type="password" id="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>Register</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Register;
