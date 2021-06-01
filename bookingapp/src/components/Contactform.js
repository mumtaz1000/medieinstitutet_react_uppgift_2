/* This contains Contact form code */
/* Included in Medieinstitutet assignment 2 */
import React from "react"
class Contactform extends React.Component{
    constructor(){
        super()
        this.state ={
            firstName:"",
            lastName:"",
            telefoneNumber:"",
            message:""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
const {name,value} = event.target
this.setState({[name]:value})
    }
    render(){
        return(
        <div className="container">
            <form >
            <label >First Name</label>
            <input type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
            />
            <br />
            
            <label >Last Name</label>
            <input type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
            />
            <br />
            
            <label >Mobile Number</label>
            <input type="tel"
            name="telefoneNumber"
            placeholder="xxx-xxx-xxxx"
            value={this.state.telefoneNumber}
            onChange={this.handleChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
            <br />
            
            <label >Message</label>
            <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Write your message here"
            />
            
            <button className="submitButton">Submit</button>
            
            <h1>You entered:{this.state.firstName}
            <br/>{this.state.lastName}
            <br/>{this.state.telefoneNumber}
            <br />{this.state.message}
            </h1>
            <br /><br />
            </form>
        </div>
        )
    }
}

export default Contactform