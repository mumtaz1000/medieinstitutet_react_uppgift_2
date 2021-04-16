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
            <form class="w-full max-w-lg">
            <div class="flex flex-wrap mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide
            text-gray-700 text-xs font-bold mb-2 
            ">First Name</label>
            <input type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
            class="block w-full bg-purple-200 text-gray-700
            border border-purple-200 rounded
            py-3 px-4 leading-tight
            focus:outline-none focus:border-purple-500 focus:bg-indigo-50"
            /></div>
            <br />
            <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide
            text-gray-700 text-xs font-bold mb-2 
            ">Last Name</label>
            <input type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
            class="block w-full bg-purple-200 text-gray-700
            border border-purple-200 rounded
            py-3 px-4 leading-tight
            focus:outline-none focus:border-purple-500 focus:bg-indigo-50"
            /></div>
            <br />
            </div>
            <div class="flex flex-wrap mx-3 mb-6">
            <div class="w-full px-3">
            <label class="block uppercase tracking-wide
            text-gray-700 text-xs font-bold mb-2 
            ">Mobile Number</label>
            <input type="tel"
            name="telefoneNumber"
            placeholder="xxx-xxx-xxxx"
            value={this.state.telefoneNumber}
            onChange={this.handleChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            class="block w-full bg-purple-200 text-gray-700
            border border-purple-200 rounded
            py-3 px-4 leading-tight
            focus:outline-none focus:border-purple-500 focus:bg-indigo-50"
            />
            </div>
            <div class="w-full px-3 mt-6">
            <label class="block uppercase tracking-wide
            text-gray-700 text-xs font-bold mb-2 
            ">Message</label>
            <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Write your message here"
            class="block w-full bg-purple-200 text-gray-700
            border border-purple-200 rounded
            py-3 px-4 leading-tight
            focus:outline-none focus:border-purple-500
            focus:bg-indigo-50"
            />
            </div>
            <div class="w-full px-3 mt-5 mb-5">
            <button class="bg-indigo-900 
            hover:bg-indigo-300
            mr-8
            text-white text-xl
            font-bold 
            py-2 px-4 rounded">Submit</button>
            </div>
            <h1>You entered:{this.state.firstName}
            <br/>{this.state.lastName}
            <br/>{this.state.telefoneNumber}
            <br />{this.state.message}
            </h1>
            <br /><br />
            
            </div>
            </form>

        )
    }
}

export default Contactform