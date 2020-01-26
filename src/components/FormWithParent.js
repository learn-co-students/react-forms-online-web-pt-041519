import React from 'react';

export default class Form extends React.Component {

    // constructor() {
    //     super()
    // }

    handleSubmit = (e) => {
        e.preventDefault()
        let firstNameValue = document.getElementById('uncontrolledFirstName').value
        let lastNameValue = document.getElementById('uncontrolledLastName').value
        let formData = { firstName: firstNameValue, lastName: lastNameValue }

        const uncontrolledDiv = document.getElementById('uncontrolledList')
        const listItem = document.createElement('div')
        listItem.innerHTML = `<span>${formData.firstName} </span><span>${formData.lastName}</span></div>`
        uncontrolledDiv.appendChild(listItem)

        // let dataArray = this.state.submittedData.concat(formData)
        // this.setState({submittedData: dataArray})
        // this.sendFormDataSomewhere(formData)
    }

    // listOfSubmissions = () => {
    //     return this.state.submittedData.map(data => {
    //         return <div><span>{data.firstName} </span><span>{data.lastName}</span></div>
    //     })
    // }

    render() {
        return (
          <div id="uncontrolledList">
            <form onSubmit={event => this.handleSubmit(event)}>
              <input
                type="text"
                id="uncontrolledFirstName"
                name="firstName"
                //onChange={event => this.props.handleFirstNameChange(event)}
                onChange={e => this.props.handleChange(e)}
                value={this.props.formData.firstName}
              />
              <input
                type="text"
                id="uncontrolledLastName"
                name="lastName"
                //onChange={event => this.props.handleLastNameChange(event)}
                onChange={e => this.props.handleChange(e)}
                value={this.props.formData.lastName}
              />
              <input type="submit" />
            </form>
          </div>
        )
      }

}