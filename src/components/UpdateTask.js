import React, { Component } from 'react';
import FrontEndCalls from '../AxioisCalls/FrontEndCalls';
let api = new FrontEndCalls();

class UpdateTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            task: '',
            date: '',
            description: '',
            status: ''
        }

        this.idHandler = this.idHandler.bind(this);
        this.taskHandler = this.taskHandler.bind(this);
        this.dateHandler = this.dateHandler.bind(this);
        this.descriptionHandler = this.descriptionHandler.bind(this);
        this.statusHandler = this.statusHandler.bind(this);

    }//constructor

    componentDidMount() {
        api.gettaskById(this.state.id).then((res) => {
            let tasks = res.data;
            this.setState({
                task: tasks.task,
                date: tasks.date,
                description: tasks.description,
                status: tasks.status
            });
        });

    }

    idHandler = (event) => {
        this.setState({
            id: event.target.value
        });
    }

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


    updateTask = (e) => {
        e.preventDefault();
        let tasks = {
            id: this.state.id,
            task: this.state.task,
            date: this.state.date,
            description: this.state.description,
            status: this.state.status
        };

        api.updatetask(tasks, this.state.id).then((res) => {
            this.props.history.push('/all-tasks');
        });


    }

    cancel() {
        this.props.history.push('/all-tasks');
    }

    render() {
        return (
            <div>

                <h3>Update Task</h3>
                
                    <form>
                        <div className="form-group">
                            <label>Task ID: </label>
                            <input placeholder={this.state.id} readOnly="true" name="id" className="form-control"
                                value={this.state.id} onChange={this.idHandler} />
                        </div>
                        <div className="form-group">
                            <label>Task: </label>
                            <input placeholder="Task" name="task" className="form-control"
                                value={this.state.task} onChange={this.taskHandler} />
                        </div>
                        <div className="form-group">
                            <label>Date: </label>
                            <input placeholder="Date" name="date" className="form-control"
                                value={this.state.date} onChange={this.dateHandler} />
                        </div>
                        <div className="form-group">
                            <label>Description: </label>
                            <input placeholder="Grade" name="grade" className="form-control"
                                value={this.state.description} onChange={this.descriptionHandler} />
                        </div>
                        <div className="form-group">
                            <label>Status: </label>
                            <input placeholder="Grade" name="grade" className="form-control"
                                value={this.state.status} onChange={this.statusHandler} />
                        </div>
                        <button className="btn btn-secondary" onClick={this.updateTask}> Update </button>
                        <button className="btn btn-secondary" onClick={this.cancel.bind(this)}> Cancel </button>
                    </form>
                
            </div>

        );
    }
}

export default UpdateTask;