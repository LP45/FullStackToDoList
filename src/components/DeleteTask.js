import React, { Component } from 'react';
import FrontEndCalls from '../AxioisCalls/FrontEndCalls';
let api = new FrontEndCalls();

class DeleteTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            task: '',
            date: '',
            description: '',
            status: ''

        }


        this.deletetask = this.deletetask.bind(this);

    }

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




    deletetask = (e) => {
        e.preventDefault();
        // let tasks={
        //    id: this.state.id,
        //    task: this.state.task,
        //    date: this.state.date,
        //    description:this.state.description,
        //    status:this.state.status
        // };


        api.deletetask(this.state.id).then(res => {

            this.props.history.push('/all-tasks');

        })


    }

    cancel() {
        this.props.history.push('/all-tasks');
    }

    render() {
        return (
            <div>

                <h3 className="text-center">Delete Task</h3>

                <form>
                    <div className="form-group">
                        <label>Task ID: </label>
                        <input placeholder="Id" readOnly="true" name="id" className="form-control"
                            value={this.state.id} onChange={this.idHandler} />
                    </div>
                    <div className="form-group">
                        <label>Task: </label>
                        <input placeholder="Task" readOnly="true" name="task" className="form-control"
                            value={this.state.task} onChange={this.taskHandler} />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <input placeholder="Date" readOnly="true" name="date" className="form-control"
                            value={this.state.date} onChange={this.dateHandler} />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input placeholder="Description" readOnly="true" name="description" className="form-control"
                            value={this.state.description} onChange={this.descriptionHandler} />
                    </div>
                    <div className="form-group">
                        <label>Status: </label>
                        <input placeholder="Status" readOnly="true" name="status" className="form-control"
                            value={this.state.status} onChange={this.statusHandler} />
                    </div>

                    <button className="btn btn-secondary" onClick={this.deletetask}> Delete </button>
                    <button className="btn btn-secondary" onClick={this.cancel.bind(this)}> Cancel </button>
                </form>


            </div>
        );
    }
}

export default DeleteTask;