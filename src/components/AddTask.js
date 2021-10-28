import React, { Component } from 'react';
import Weather from './Weather.js';
import FrontEndCalls from '../AxioisCalls/FrontEndCalls.js';


let api = new FrontEndCalls();


class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {

            task: '',
            date: '',
            description: '',
            status: 'Created'
        }


        this.taskHandler = this.taskHandler.bind(this);
        this.dateHandler = this.dateHandler.bind(this);
        this.descriptionHandler = this.descriptionHandler.bind(this);
        this.statusHandler = this.statusHandler.bind(this);

    }//constructor


    // idHandler=(event) => {
    //     this.setState({
    //          id: event.target.value});
    // }


    taskHandler = (event) => {
        this.setState({
            task: event.target.value
        });
    }


    dateHandler = (event) => {
        this.setState({
            date: event.target.value
        });
    }

    descriptionHandler = (event) => {
        this.setState({
            description: event.target.value
        });
    }
    statusHandler = (event) => {
        this.setState({
            status: event.target.value
        });
    }



    saveTask = (e) => {
        e.preventDefault();
        let task = {
            //    id: this.state.id,
            task: this.state.task,
            date: this.state.date,
            description: this.state.description,
            status: this.state.status

        };
        console.log(task);
        api.createtask(task).then(res => {
            this.props.history.push('/all-tasks');
        }).catch(err => {
            console.log("task cannot be saved.");
        });




    }//closing save method

    cancel() {
        this.props.history.push('/all-tasks');
    }
    /*   <div className="form-group">
                                   //       <label>Task ID: </label>
                                   //       <input placeholder="Id" name="id" className="form-control"
                                   //          value={this.state.id} onChange={this.idHandler} />
                                   //    </div> */

    /* // <div className="form-group">
        //     <button>Status:</button>
        //     value={this.state.status} onClick={this.statusHandler}
        // </div>*/
    render() {
        return (
            <div>

                <h3 className="text-center">Add Task</h3>

                <form>
                    <div className="form-group">
                        <label>Task: </label>
                        <input placeholder="Task" name="task" className="form-control"
                            value={this.state.task} onChange={this.taskHandler} />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <input placeholder="Date" name="date" type="date" className="form-control"
                            value={this.state.date} onChange={this.dateHandler} />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input placeholder="Description" name="description" className="form-control"
                            value={this.state.description} onChange={this.descriptionHandler} />
                    </div>

                    <button className="btn btn-dark" onClick={this.saveTask}> Save </button>
                    <button className="btn btn-dark" onClick={this.cancel.bind(this)}> Cancel </button>
                </form>



                <Weather />

            </div>
        );
    }
}

export default AddTask;