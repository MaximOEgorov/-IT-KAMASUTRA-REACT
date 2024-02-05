import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik"
import loginFormSchema from "../FormValidation/LoginFormSchema";
import {loginSubmit} from "../../redux/auth-reducer.js";
import s from "./Login.module.css"
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";


const LoginForm = (props) => {
    return <div>
        <Formik
            initialValues={{email:"", password:"", rememberMe:false}}
            validate={values=> {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                return errors
            }}
            onSubmit={(values) => {
                loginSubmit(values.email, values.password, values.rememberMe)
            }}
            validationSchema={loginFormSchema}>
            {() => (
                <Form>
                    <div>
                        <Field type={'text'} name={'email'} placeholder={'e-mail'}/>
                    </div>
                    <ErrorMessage name="email" component="div"/>

                    <div>
                        <Field type={'password'} name={'password'} placeholder={'password'}/>
                    </div>
                    <ErrorMessage name="password" component="div"/>

                    <div>
                        <Field type={'checkbox'} name={'rememberMe'}/>
                        <label htmlFor={'rememberMe'}> remember me </label>
                    </div>

                    <button type={'submit'}>Log in</button>
                </Form>
            )}
        </Formik>
    </div>
}


const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return <div>
        <h1> LOGIN </h1>
        <LoginForm/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default Login
// export default connect(mapStateToProps, {}) (Login)