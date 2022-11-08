import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import api from "../../api";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [],
        licence: false
    });
    const [qualities, setQualities] = useState({});
    const [errors, setErrors] = useState({});
    const [professions, setProfessions] = useState();

    const handleChange = (target) => {
        console.log(target);
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    useEffect(() => {
        validate();
    }, [data]);

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    const validatorConfig = {
        email: {
            isRequared: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: { message: "Email введен не коректно" }
        },
        password: {
            isRequared: { message: "Пароль обязателен для заполнения" },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотябы одну заглавную букву"
            },
            isDigit: {
                message: "Пароль должен содержать хотябы одно число"
            },
            isMinNumber: {
                message: "Пароль должен быть менее 8 символов",
                value: 8
            }
        },
        profession: {
            isRequared: { message: "Обязательно выберите профессию" }
        },
        licence: {
            isRequared: {
                message: "Обязательно подтвердите лицензионное соглашение"
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
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
            <SelectField
                options={professions}
                defaultOption="Выбрать..."
                label={"Выберите профессию"}
                value={data.profession}
                error={errors.profession}
                name="profession"
                onChange={handleChange}
            />
            <RadioField
                options={[
                    { name: "male", value: "male" },
                    { name: "female", value: "female" },
                    { name: "other", value: "other" }
                ]}
                label={"Выберите ваш пол"}
                value={data.sex}
                name="sex"
                onChange={handleChange}
            />
            <MultiSelectField
                defaultValue={data.qualities}
                label={"Выберите качества"}
                options={qualities}
                onChange={handleChange}
                name="qualities"
            />
            <CheckBoxField
                value={data.licence}
                onChange={handleChange}
                name="licence"
                error={errors.licence}
            >
                {" "}
                Подтвердить <a>лицензионное соглашение?</a>{" "}
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

export default RegisterForm;
