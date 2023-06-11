import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

import { IoIosLock } from "react-icons/io";

// import welcome from "../../assets/Images/signup.png";

import { Formik, Form, Field } from "formik";

const SignUp = (props) => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async () => {
        // e.preventDefault();
        // const {name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });

        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            props.showAlert("Account Created Successfully", "success")
            alert("Account Created Successfully")
            localStorage.setItem('token', json.authtoken);
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            navigate('/home');
        }
        else {
            props.showAlert("Invalid Credential", "danger")
            alert(json.error)
        }
    }

    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const validateUserName = (value) => {
        let error;
        if (!value) {
            error = "*This field is required";
        }else if (value.length < 5) {
            error = "*It must be greater than 5";
        }
        setname(value)
        return error;
    };

    const validateEmail = (value) => {
        let error;
        if (!value) {
            error = "*This field is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = "*Invalid email address";
        }
        setemail(value)
        return error;
    };

    const validatePassword = (value) => {
        let error;
        if (!value) {
            error = "*This field is Required";
        } else if (!/^[0-9a-zA-Z]{9,100}$/i.test(value)) {
            error = "*Invalid Password must be greater than 8";
        }
        setpassword(value)
        return error;
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div
                        className={`${styles.left} col-md-6 d-flex justify-content-center m-auto`}
                    >
                        <img
                            className={`${styles.img} img-fluid`}
                            src="./Images/signup.png"
                            alt="welcome"
                        />
                    </div>
                    <div className="col-md-6 m-auto">
                        <div className="card border-dark">
                            <div className="card-body">
                                <h3 className="text-dark">Sign Up</h3>
                                <p className="text-muted">
                                    Please fill in this form to create an account!
                                </p>
                                <hr
                                    style={{
                                        color: "#000",
                                        borderTop: "2px solid",
                                        opacity: "1",
                                    }}
                                />
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={handleSubmit}
                                >
                                    {({ errors, touched }) => (
                                        <Form className="mt-5">
                                            <div className="mb-3">
                                                <Field
                                                    type="text"
                                                    className={`form-control ${errors.name && touched.name
                                                        ? "border-danger"
                                                        : ""
                                                        }`}
                                                    id="name"
                                                    name="name"
                                                    placeholder="Username"
                                                    validate={validateUserName}
                                                />
                                                {errors.name && touched.name && (
                                                    <div className="form-text text-danger">
                                                        {errors.name}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="mb-3">
                                                <Field
                                                    type="email"
                                                    className={`form-control ${errors.email && touched.email ? "border-danger" : ""
                                                        }`}
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    validate={validateEmail}
                                                />
                                                {errors.email && touched.email && (
                                                    <div className="form-text text-danger">
                                                        {errors.email}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="mb-3">
                                                <Field
                                                    type="password"
                                                    className={`form-control ${errors.password && touched.password
                                                        ? "border-danger"
                                                        : ""
                                                        }`}
                                                    id="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    validate={validatePassword}
                                                />
                                                {errors.password && touched.password && (
                                                    <div className="form-text text-danger">
                                                        {errors.password}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="mb-3 d-grid col-4 mx-auto">
                                                <button type="Submit" className="btn btn-dark">
                                                    <IoIosLock className="fs-4 me-1" />
                                                    Create Account
                                                </button>
                                            </div>
                                            <p className={`${styles.new} text-center`}>
                                                Already have an account ?{" "}
                                                <span
                                                    onClick={() => navigate("/login")}
                                                    className="ms-1 text-dark fw-bold text-decoration-underline"
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    Login here
                                                </span>
                                            </p>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
