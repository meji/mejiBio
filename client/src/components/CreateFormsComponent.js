import React, {Component} from 'react';
import {Control, Errors, Form} from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);




const NewBio = (props)=>{
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
const NewCourse = (props)=>{
    function handleSubmitCourse(values) {
        props.postCourse(values.name, values.description, values.school, values.dateInit, values.dateEnd);
        props.resetCourseForm();
    }
    return(<>
        <h2>Nuevo Curso</h2>
        <Form model="course" onSubmit={(values) => handleSubmitCourse(values)}>
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
                    maxLength: "Must be 15 characters or less"
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
                        maxLength: "Must be 15 characters or less"
                    }}
                />
            </div>
            <div className="form-line">
                <Control.text model=".school" id="school" name="school" placeholder="School" className="form-control"
            validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
            />
            <Errors
                className="text-danger"
                model=".school"
                show="touched"
                messages={{
                    required: 'Required',
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less"
                }}
            />
            </div>
            <div className="form-line">
                <Control.text model=".dateInit" id="dateInit" name="dateInit" placeholder="Date Init" className="form-control"
                              validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
                />
                <Errors
                    className="text-danger"
                    model=".dateInit"
                    show="touched"
                    messages={{
                        required: 'Required',
                        minLength: "Must be greater than 2 characters",
                        maxLength: "Must be 15 characters or less"
                    }}
                />
            </div>
            <div className="form-line">
                <Control.text model=".dateEnd" id="dateEnd" name="dateEnd" placeholder="Date Init" className="form-control"
            validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
            />
            <Errors
                className="text-danger"
                model=".dateEnd"
                show="touched"
                messages={{
                    required: 'Required',
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less"
                }}
            />
            </div>
            <button type="submit">
                Enviar Curso
            </button>
        </Form>
    </>
    )
}
const NewJob = (props)=>{
    function handleSubmitJob(values) {
        props.postJob(values.name, values.description, values.position, values.dateInit, values.dateEnd);
        props.resetJobForm();
    }
    return(<>
        <h2>Nuevo Trabajo</h2>
        <Form model="job" onSubmit={(values) => handleSubmitJob(values)}>
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
                        maxLength: "Must be 15 characters or less"
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
                            maxLength: "Must be 15 characters or less"
                        }}
                    />
                </div>
                <div className="form-line">
                    <Control.text model=".company" id="company" name="company" placeholder="Company" className="form-control"
                validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
                />
                <Errors
                    className="text-danger"
                    model=".company"
                    show="touched"
                    messages={{
                        required: 'Required',
                        minLength: "Must be greater than 2 characters",
                        maxLength: "Must be 15 characters or less"
                    }}
                />
                </div>
                <div className="form-line">
                    <Control.text model=".dateInit" id="dateInit" name="dateInit" placeholder="Date Init" className="form-control"
                                  validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
                    />
                    <Errors
                        className="text-danger"
                        model=".dateInit"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: "Must be greater than 2 characters",
                            maxLength: "Must be 15 characters or less"
                        }}
                    />
                </div>
                <div className="form-line">
                    <Control.text model=".dateEnd" id="dateEnd" name="dateEnd" placeholder="Date Init" className="form-control"
                validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
                />
                <Errors
                    className="text-danger"
                    model=".dateEnd"
                    show="touched"
                    messages={{
                        required: 'Required',
                        minLength: "Must be greater than 2 characters",
                        maxLength: "Must be 15 characters or less"
                    }}
                />
                </div>
                <button type="submit">
                    Enviar Curso
                </button>
            </Form>
        </>
    )
}
const NewProject= (props)=>{
    function handleSubmitProject(values) {
        props.postProject(values.name, values.description, values.client, values.img, values.date);
        props.resetProjectForm();
    }
    return(<>
        <h2>Nuevo Proyecto</h2>
        <Form model="project" onSubmit={(values) => handleSubmitProject(values)}>
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
                    maxLength: "Must be 15 characters or less"
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
                        maxLength: "Must be 15 characters or less"
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
                        maxLength: "Must be 15 characters or less"
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
                        maxLength: "Must be 15 characters or less"
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
                        maxLength: "Must be 15 characters or less"
                    }}
                />
            </div>
            <div className="form-line">
                <Control.text model=".img" id="img" name="img" placeholder="Img" className="form-control"
            validators={{required, minLength:minLength(3), maxLength: maxLength(15)}}
            />
            <Errors
                className="text-danger"
                model=".img"
                show="touched"
                messages={{
                    required: 'Required',
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less"
                }}
            />
            </div>
            <button type="submit">
                Enviar Proyecto
            </button>
        </Form>
    </>
    )
}
class AdminForms extends Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name;
        this.setState({
            [name]: value,
        })
    }
    render(){
        return(
            <>
                <NewBio
                    postBio={this.props.postBio}
                    resetBioForm={this.props.resetBioForm}
                />
                <NewCourse
                    postCourse={this.props.postCourse}
                    resetCourseForm={this.props.resetCourseForm}
                />
                <NewJob
                    postJob={this.props.postJob}
                    resetJobForm={this.props.resetJobForm}
                />
                <NewProject
                    postProject={this.props.postProject}
                    resetProjectForm={this.props.resetProjectForm}
                />
            </>
        )
    }

}

export default AdminForms;

