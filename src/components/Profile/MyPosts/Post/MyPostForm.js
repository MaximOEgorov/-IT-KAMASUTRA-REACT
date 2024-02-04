import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik"
import styled from 'styled-components';

const StyledErrorMessage = styled(ErrorMessage)`
    color: red;
    font-size: 12px;
`;

const MyPostForm = (props) => {
    return (
        <Formik
            initialValues={{newPostText: ""}}
            validate={values=> {
                const errors = {};
                if (!values.newPostText) {
                    errors.newPostText = 'Требуется заполнить поле';
                }
                return errors
            }}
            onSubmit={(values, {resetForm}) => {
                props.addPost(values.newPostText);
                resetForm();
            }}>
            <Form>
                <div>
                    <Field type={"textarea"} name={"newPostText"}>
                        {({field}) => (
                            <textarea {...field} rows="5" cols="70"
                                      placeholder="Enter your post hear"/>
                        )}
                    </Field>
                    <StyledErrorMessage name="newPostText"/>
                </div>
                <div>
                    <button type={"submit"}>Add post</button>
                </div>
            </Form>
        </Formik>
    )
}

export default MyPostForm