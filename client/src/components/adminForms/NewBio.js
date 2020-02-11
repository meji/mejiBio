import {Control, Form} from "react-redux-form";
import React from "react";
import {required, maxLength, minLength, isNumber, validEmail} from '../../utils/validations';

function NewBio(props){
    function   handleSubmitBio(values) {
        props.postBio(values.name, values.charge, values.biotext);
        props.resetBioForm();
    }
    return(
        <>
            <h2>Nueva Bio</h2>
            <Form model="bio" onSubmit={(values) => handleSubmitBio(values)}>
                <div className="form-line">
                    <Control.text model=".name" id="name" name="name" placeholder="Name" className="form-control"
                    />

                </div>
                <div className="form-line">
                    <Control.text model=".charge" id="charge" name="charge" placeholder="charge" className="form-control"
                    />

                </div>
                <div className="form-line">
                    <Control.textarea model=".biotext" id="biotext" name="biotext" placeholder="Desc Bio" className="form-control"
                    />
                </div>
                <button type="submit">
                    Enviar Bio
                </button>
            </Form>
        </>
    )
}
export default NewBio;
