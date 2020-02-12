import {Control, Errors, Form, Field, actions} from "react-redux-form";
import React, {Component} from "react";
import {required, maxLength, minLength, isNumber, validEmail} from '../../utils/validations';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";


class NewProject extends Component{
    constructor(props) {
        super(props);
        this.state = {
            img: {},
            logo: {},
            randomImg: Math.floor(Math.random()*10000000),
            randomLogo: Math.floor(Math.random()*10000000)
        }
    }
    handleSubmitProject(values, img, logo) {
        const token = window.localStorage.getItem("jwt");
        this.props.postProject(values.name, values.charge, values.client, values.date,  values.description, token, this.props.postImgProject(img, logo, token, values.name))
        this.props.resetProjectForm();
        this.setState({img: {}})
        this.setState({logo:{}})
        this.setState({randomImg: Math.floor(Math.random()*1000)})
        this.setState({randomLogo:  Math.floor(Math.random()*1000)})
    }
    manageImg(e){
        this.setState({img:e.target.files[0]})
    }
    manageLogo(e){
        this.setState({logo:e.target.files[0]})
    }
    render(){
    return(<>
            <h2>Nuevo Proyecto</h2>
            <Form model="project" onSubmit={(values) => this.handleSubmitProject(values, this.state.img, this.state.logo)}>
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
                    <Control.file model=".img" id="img" name="img" placeholder="Img" className="form-control"  key={this.state.randomImg} onChange={e => {this.manageImg(e)}}
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
                    <Control.file model=".logo" id="logo" name="logo" placeholder="Logo" className="form-control" key={this.state.randomLogo} onChange={e => {this.manageLogo(e)}}
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
export default NewProject;