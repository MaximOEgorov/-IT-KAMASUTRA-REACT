import React from "react";
import {Formik, Form, Field} from "formik"

const ProfileDataForm = (props) => {
    return (
        <Formik
            initialValues={
                {
                    fullName: props.profile.fullName,
                    lookingForAJob: props.profile.lookingForAJob,
                    lookingForAJobDescription: props.profile.lookingForAJobDescription
                }}
            onSubmit={(values, {resetForm}) => {
                props.sendMessage(values.newMessageBody);
                resetForm();
            }}>
            <Form>
                <div>
                    <b>Full name: </b><Field type={"text"} name={"fullName"}></Field>
                </div>
                <div>
                    <b>Looking for a job: </b><Field type={"checkbox"} name={"lookingForAJob"}></Field>
                </div>
                {props.profile.lookingForAJob &&
                    <div>
                        <b>My professional skills: </b><Field type={"text"} name={"lookingForAJobDescription"}></Field>
                    </div>}
                <div>
                    <button type={"submit"}>Send</button>
                </div>
            </Form>
        </Formik>
    )
}

export default ProfileDataForm