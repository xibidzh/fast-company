import React, { useEffect, useState } from "react";
// import { validator } from "../../utils/validator";
import CheckBoxField from "../common/form/checkBoxField";
import TextField from "../common/form/textField";
import * as yup from "yup";

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validateSchema = yup.object().shape({
        password: yup
            .string()
            .required("Пароль обязателен для заполнения")
            .matches(
                /^(?=.*[A-Z])/,
                "Пароль должен содержать хотябы одну заглавную букву"
            )
            .matches(/(?=.*[0-9])/, "Пароль должен содержать хотябы одно число")
            .matches(
                /(?=.*[!@#$%^&*])/,
                "Пароль должен содержать один из символов !@#$%^&*"
            )
            .matches(/(?=.{8,})/, "Пароль должен быть не менее 8 символов"),
        email: yup
            .string()
            .required("Электронная почта обязательна для заполнения")
            .email("Email введен не коректно")
    });

    useEffect(() => {
        validate();
    }, [data]);

    // const validatorConfig = {
    //     email: {
    //         isRequared: {
    //             message: "Электронная почта обязательна для заполнения"
    //         },
    //         isEmail: { message: "Email введен не коректно" }
    //     },
    //     password: {
    //         isRequared: { message: "Пароль обязателен для заполнения" },
    //         isCapitalSymbol: {
    //             message: "Пароль должен содержать хотябы одну заглавную букву"
    //         },
    //         isDigit: {
    //             message: "Пароль должен содержать хотябы одно число"
    //         },
    //         isMinNumber: {
    //             message: "Пароль должен быть не менее 8 символов",
    //             value: 8
    //         }
    //     }
    // };

    const validate = () => {
        // const errors = validator(data, validatorConfig);
        validateSchema
            .validate(data)
            .then(() => setErrors({}))
            .catch((err) => setErrors({ [err.path]: err.message }));
        // setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValide = Object.keys(errors).length !== 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValide = validate();
        if (!isValide) return;
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label={"E-mail"}
                name={"email"}
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label={"Password"}
                name={"password"}
                type={"password"}
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <CheckBoxField
                value={data.stayOn}
                onChange={handleChange}
                name="stayOn"
            >
                Оставаться в системе?
            </CheckBoxField>
            <button
                className="btn btn-primary w-100 mx-auto"
                disabled={isValide}
            >
                Отправить
            </button>
        </form>
    );
};

export default LoginForm;
