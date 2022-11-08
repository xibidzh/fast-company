import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
    const { type } = useParams;
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );
    const toggleFormType = () => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 offset-md-4 shadow p-4">
                    {formType === "register" ? (
                        <>
                            <h3 className="mb-4">Register:</h3>
                            <RegisterForm />
                            <p>
                                Already have account{" "}
                                <u>
                                    {" "}
                                    <a role="button" onClick={toggleFormType}>
                                        Sing In
                                    </a>
                                </u>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="mb-4">Login:</h3>
                            <LoginForm />
                            <p>
                                Dont have account?{" "}
                                <u>
                                    <a role="button" onClick={toggleFormType}>
                                        Sing Up
                                    </a>
                                </u>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
