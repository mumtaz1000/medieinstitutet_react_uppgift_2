import React from "react"

class Contactform extends React.Component{
    constructor(){
        super()
        this.state ={
            firstName:"",
            lastName:"",
            telefoneNumber:""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
const {name,value} = event.target
this.setState({[name]:value})
    }
    render(){
        return(
            <form>
            <input type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
            /><br />
            <input type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
            /><br />
            <input type="tel"
            name="telefoneNumber"
            placeholder="xxx-xxx-xxxx"
            value={this.state.telefoneNumber}
            onChange={this.handleChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required />
            <h1>You entered:{this.state.firstName}
            <br/>{this.state.lastName}
            <br/>{this.state.telefoneNumber}
            </h1>
            <button class="bg-indigo-900 
            hover:bg-indigo-300
            mr-8
            text-white text-xl
            font-bold 
            py-2 px-4 rounded">Submit</button>
            </form>

        )
    }
}

export default Contactform