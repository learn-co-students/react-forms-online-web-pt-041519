import React from 'react'
import FormWithParent from './FormWithParent'
import DisplayData from './DisplayData'


class ParentComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
    }
        
    // handleFirstNameChange = e => {
    //     this.setState({
    //         firstName: e.target.value
    //     })
    // }

    // handleLastNameChange = e => {
    //     this.setState({
    //         lastName: e.target.value
    //     })
    // }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                {/* <FormWithParent
                    formData={this.state}
                    handleFirstNameChange={this.handleFirstNameChange}
                    handleLastNameChange={this.handleLastNameChange}
                /> */}
                <FormWithParent
                    formData={this.state}
                    handleChange={this.handleChange}
                />
                <DisplayData formData={this.state} />
            </div>
        )
    }
}

export default ParentComponent;