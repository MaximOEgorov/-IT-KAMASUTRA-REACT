import React from "react";
import {Formik, Form, Field} from "formik"

const MyPostForm = (props) => {
    return (
        <Formik
            initialValues={{newPostText: ""}}
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
                </div>
                <div>
                    <button type={"submit"}>Add post</button>
                </div>
            </Form>
        </Formik>
    )
}

export default MyPostForm