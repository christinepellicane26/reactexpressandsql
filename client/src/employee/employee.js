import React, { Component } from 'react';
import axios from 'axios';


class Employee extends Component {
    constructor() {
        super();
        this.state = {
            employees: [],
            Name: "",
            Salary: 0,
    }
    }
    //Lifecycle methods go here

    async componentDidMount() {
        try {
            this.refresh();
        } this.catch(error) {
            console.error(error)
        }
            const res = await axios.get("/employees");
            console.log(res.data)
            this.setState({
                employees: res.data

            })

        }
    }

    //Put methods here

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.name
            [event.target.value]: event.target.value
        })
        // console.log("Grabbing event target name:", event.target.name);

    }

    addEmployee = async () => {
        event.preventDefault();
        const {Name, EmpCode, Salary} = this.state
        try {
            await axios.post(`/employees/${id}`)
           } catch (error) {
               console.log(error)
           }
    }

    // add update

//async doesn't need parentheses because of only one element, but still works
    deleteEmployee = async (id) => {
        try {
            //template literal uses backticks
            await axios.delete(`/employees/${id}`);
            console.log(`Id : ${id} was deleted`);
            const res = await axios.get('/employees');
            this.refresh();
        } catch (error) {
            console.log(error);
        }
    }

    refresh = asynch () => {
        try{
            const res = await axios.get("employees")
            this.setState({
                employees: res.data
            })
        } catch (error){
            console.error(error)
        }
    }

    render() {
        if (this.state.employees.length) {
            return (
                <div>
                    <ul>
                        {this.state.employees.map(el => {
                            return (
                                <li key={el.EmpID}>{el.Name}
                                    <button type="button" onClick={() => this.deleteEmployee(el.EmpID)}>Delete
                </button></li>

                            )
                        })}
                    </ul>
                    <form onSubmit = {this.addEmployee}>
                        /* all this should match state */
                        <input name="Name" placeholder="Please enter the employees name here yay"/>
                        <input name="EmpCode" placeholder="Please enter the employees code here: "/>
                        <input name="Salary" placeholder="Please enter the employees salary here"/>
                    </form>
                </div>
            )
        } else {
            return (
                <div> No employees to list </div>
            )
        }
    }



export default Employee;