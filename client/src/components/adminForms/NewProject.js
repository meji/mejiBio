import {Control, Errors, Form} from "react-redux-form";
import React, {Component} from "react";
import {required, maxLength, minLength, isNumber, validEmail} from '../../utils/validations';

class NewProject extends Component{
    constructor(props) {
        super(props);
    }
    handleSubmitProject(values) {
        const token = window.localStorage.getItem("jwt");
        this.props.postProject(values.name, values.charge, values.client, values.date,  values.description, token, this.props.postImgProject(values.img, values.logo, token, values.name))
        this.props.resetProjectForm();
    }
    render(){
    return(<>
            <h2>Nuevo Proyecto</h2>
            <Form model="project" onSubmit={(values) => this.handleSubmitProject(values)}>
                <div className="form-line">
                    <Control.text model=".name" id="name" name="name" placeholder="Name" className="form-control"
                                  validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
                    />
                    <Errors
                        className="text-danger"
                        model=".name"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: "Must be greater than 2 characters",
                        }}
                    />
                </div>
                <div className="form-line">
                    <Control.textarea model=".description" id="description" name="description" placeholder="Description" className="form-control"
                                      validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
                    />
                    <Errors
                        className="text-danger"
                        model=".description"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: "Must be greater than 2 characters",
                        }}
                    />
                </div>
                <div className="form-line">
                    <Control.text model=".charge" id="school" name="charge" placeholder="Charge" className="form-control"
                                  validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
                    />
                    <Errors
                        className="text-danger"
                        model=".charge"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: "Must be greater than 2 characters",
                        }}
                    />
                </div>
                <div className="form-line">
                    <Control.text model=".client" id="school" name="client" placeholder="Client" className="form-control"
                                  validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
                    />
                    <Errors
                        className="text-danger"
                        model=".client"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: "Must be greater than 2 characters",
                        }}
                    />
                </div>
                <div className="form-line">
                    <Control.text model=".date" id="date" name="date" placeholder="Date" className="form-control"
                                  validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
                    />
                    <Errors
                        className="text-danger"
                        model=".date"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: "Must be greater than 2 characters",
                        }}
                    />
                </div>
                <div className="form-line">
                    <p>Image</p>
                    <Control.file model=".img" id="img" name="img" placeholder="Img" className="form-control"
                    />
                    <Errors
                        className="text-danger"
                        model=".img"
                        show="touched"
                        messages={{
                            required: 'Required',
                        }}
                    />
                </div>
                <div className="form-line">
                    <p>Logo</p>
                    <Control.file model=".logo" id="logo" name="logo" placeholder="Logo" className="form-control"
                    />
                    <Errors
                        className="text-danger"
                        model=".logo"
                        show="touched"
                        messages={{
                            required: 'Required',
                        }}
                    />
                </div>

                <button type="submit">
                    Enviar Proyecto
                </button>
            </Form>
        </>
    )}
}
export default NewProject