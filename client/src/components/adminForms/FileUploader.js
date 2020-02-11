import React, {Component} from 'react'

export default class FieldFileInput  extends Component{
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        const { input: { onChange } } = this.props
        onChange(e.target.files[0])
    }

    render(){
        const { input: { value } } = this.props
        const {input,label, required, name} = this.props  //whatever props you send to the component from redux-form Field
        return(
            <div><label>{label}</label>
                <div>
                    <input
                        type='file'
                        accept='.jpg, .png, .jpeg, .svg, .gif'
                        onChange={this.onChange}
                    />
                </div>
            </div>
        )
    }
}