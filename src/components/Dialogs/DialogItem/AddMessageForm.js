import React from "react";
import {Formik, Form, Field} from "formik"

const AddMessageForm = (props) => {
    return (
        <Formik
            initialValues={{newMessageBody: ""}}
            onSubmit={(values, { resetForm }) => {
                props.sendMessage(values.newMessageBody);
                resetForm();
            }}>
            <Form>
                <div>
                    <Field type={"textarea"} name={"newMessageBody"}>
                        {({field}) => (
                            <textarea {...field} rows="4" cols="50"
                                      placeholder="Enter your message for dialog hear"/>
                        )}
                    </Field>
                </div>
                <div>
                    <button type={"submit"}>Send</button>
                </div>
            </Form>
        </Formik>
    )
}


export default AddMessageForm
